#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");

program.version("1.0.0").description("CLI to create a new Fastify module");

const srcDirectory = path.join(__dirname, "src");
const modulesDirectory = path.join(srcDirectory, "modules");

// Vérifier si le dossier src existe
if (!fs.existsSync(srcDirectory)) {
  fs.mkdirSync(srcDirectory);
}

// Vérifier si le dossier modules existe
if (!fs.existsSync(modulesDirectory)) {
  fs.mkdirSync(modulesDirectory);
}

program
  .command("create <moduleName>")
  .description("Create a new module with associated files")
  .action((moduleName) => {
    const modulePath = path.join(modulesDirectory, moduleName);
    // Vérifier si le module existe déjà
    if (fs.existsSync(modulePath)) {
      console.error(
        `\n ⚠️   Choose another module name, ${moduleName} already exists. \n`
      );
      return;
    }
    fs.mkdirSync(modulePath);

    const templateDirectory = path.join(process.cwd(), "templates");

    // Vérifier si le dossier templates existe
    if (!fs.existsSync(templateDirectory)) {
      console.error(
        `\n ⚠️   The 'templates' directory does not exist in the current working directory.\n`
      );
      return;
    }

    const templateFiles = fs.readdirSync(templateDirectory);

    templateFiles.forEach((templateFile) => {
      const templateFilePath = path.join(templateDirectory, templateFile);
      const fileContent = fs.readFileSync(templateFilePath, "utf8");
      const fileName = templateFile
        .replace(".template", "")
        .replace("{moduleName}", moduleName);
      const filePath = path.join(modulePath, fileName);
      fs.writeFileSync(filePath, fileContent);
    });

    console.log(`\n ${moduleName} module successfully created.\n`);
  });

program.parse(process.argv);
