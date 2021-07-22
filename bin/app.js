#!/usr/bin/env node

const { program } = require("commander");
const GenerateModule = require("./GenerateModule");
const generateModule = new GenerateModule();

program
    .requiredOption(`-n, --name <name>`, `Name of component will create`)
    .option(
        `-d --directory <directory>`,
        `Path of component will create (default: src)`,
        "src"
    )
    .option(`-c --classType`, `Create a component a class component`)
    .parse();

const { name, directory, classType } = program.opts();
const upperName = name.replace(name[0], name[0].toUpperCase());
const dirPath = `${directory}/${upperName}`;

generateModule.createComponent(dirPath, upperName, classType);
program.parse(process.argv);
