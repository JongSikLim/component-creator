#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");

program
    .requiredOption(`-n, --name <name>`, `component name`)
    .option(`-d --directory <directory>`, `directory`, "src")
    .option(`-p --pattern <pattern>`, `is use CP pattern`, true)
    .parse();

const { name, directory, pattern } = program.opts();
const upperName = name.replace(name[0], name[0].toUpperCase());
const dirPath = `${directory}/${upperName}`;

const log = (logText) => {
    // const rootPath = path.resolve("./");
    console.log("\x1b[32m", `CREATE`, "\x1b[37m", `${logText}`);
};

const createFile = (filepath, content) => {
    if (fs.existsSync(filepath)) throw new Error("File Alreay Exist!");

    fs.writeFileSync(filepath, content);
    log(filepath);
    return;
};

const createFolder = (dirPath) => {
    if (fs.existsSync(dirPath)) throw new Error("Directroy Already Exist!");
    let paths = dirPath.split("/") || [dirPath];

    for (let i = 0; i < paths.length; i++) {
        let nowPath = paths.slice(0, i + 1).join("/");

        if (!fs.existsSync(nowPath)) fs.mkdirSync(nowPath);
    }
    // log(dirPath);
    return;
};

const createComponent = (dirPath, name) => {
    createComponentFolder(dirPath);
    createPresenterComponent(dirPath, name);
    createContainerComponent(dirPath, name);
    createIndex(dirPath, name);
    return;
};

const createComponentFolder = (dirPath) => {
    createFolder(dirPath);
    return;
};

const createIndex = (dirPath, name) => {
    const indexFilePath = `${dirPath}/index.js`;
    const content = `import ${name}Container from './${name}Container.js'
export default ${name}Container;`;

    createFile(indexFilePath, content);
    return;
};

const createContainerComponent = (dirPath, name) => {
    const indexFilePath = `${dirPath}/${name}Container.js`;
    const content = `import react from 'react';
import ${name}Presenter from './${name}Presenter';
    
const ${name}Container = () => {
    return <${name}Presenter/>
}
    
export default ${name}Container;`;

    createFile(indexFilePath, content);
};

const createPresenterComponent = (dirPath, name) => {
    const indexFilePath = `${dirPath}/${name}Presenter.js`;
    const content = `import react from 'react';

const ${name}Presenter = () => {
    return <></>
}

export default ${name}Presenter;`;

    createFile(indexFilePath, content);
    return;
};

createComponent(dirPath, upperName);
program.parse(process.argv);
