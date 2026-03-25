import React from "react";
import { renderToString } from "react-dom/server";
import { ModulePrereq } from "../client/src/components/training/ModulePrereq";
import { writeFile } from "fs/promises";
import path from "path";

async function generatePrerequisiteHTML() {
  const html = renderToString(React.createElement(ModulePrereq));

  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Engineering Enablement - Prerequisites</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
  <div class="max-w-4xl mx-auto py-8 px-4">
    ${html}
  </div>
</body>
</html>`;

  const outputPath = path.join(
    process.cwd(),
    "dist_single/AIEngineeringCopilotPrerequisite.html"
  );
  await writeFile(outputPath, fullHTML);
  console.log(`Generated AIEngineeringCopilotPrerequisite.html at ${outputPath}`);
}

generatePrerequisiteHTML();
