import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, rename } from "fs/promises";
import { execSync } from "child_process";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "@neondatabase/serverless",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });
  await rm("dist_single", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  console.log("building standalone HTML files...");
  execSync("npx vite build -c vite.singlefile.config.ts", { stdio: "inherit" });

  console.log("generating prerequisite HTML...");
  execSync("tsx script/generate-prereq-html.ts", { stdio: "inherit" });

  console.log("renaming standalone HTML files to final names...");
  // Rename in dist_single only
  await rename(
    "dist_single/index.html",
    "dist_single/AIEngineeringCopilotTraining.html"
  );

  console.log("✓ Build complete!");
  console.log("  dist/ - Full server + client application");
  console.log(
    "  dist_single/ - Standalone HTML files (AIEngineeringCopilotTraining.html and AIEngineeringCopilotPrerequisite.html)"
  );
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
