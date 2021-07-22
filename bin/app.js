#!/usr/bin/env node

const { program } = require("commander");
const GenerateModule = require("./GenerateModule");
const generateModule = new GenerateModule();

program
    .requiredOption(`-n, --name <name>`, `component name`)
    .option(`-d --directory <directory>`, `directory`, "src")
    .option(`-c --classType`, `Whether to make by class component`)
    .parse();

const { name, directory, classType } = program.opts();
const upperName = name.replace(name[0], name[0].toUpperCase());
const dirPath = `${directory}/${upperName}`;

generateModule.createComponent(dirPath, upperName, classType);
program.parse(process.argv);
