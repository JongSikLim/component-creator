const fs = require("fs");

class GenerateModule {
    log = (logText) => {
        console.log("\x1b[32m", `CREATE`, "\x1b[37m", `${logText}`);
    };
    createFile = (filepath, content) => {
        if (fs.existsSync(filepath)) throw new Error("File Alreay Exist!");

        fs.writeFileSync(filepath, content);
        this.log(filepath);
        return;
    };
    createFolder = (dirPath) => {
        if (fs.existsSync(dirPath)) throw new Error("Directroy Already Exist!");
        let paths = dirPath.split("/") || [dirPath];

        for (let i = 0; i < paths.length; i++) {
            let nowPath = paths.slice(0, i + 1).join("/");

            if (!fs.existsSync(nowPath)) fs.mkdirSync(nowPath);
        }
        // log(dirPath);
        return;
    };
    createComponent = (dirPath, name, classType) => {
        if (classType) {
            this.createClassComponent(dirPath, name);
        } else {
            this.createFunctionalComponent(dirPath, name);
        }

        return;
    };
    createClassComponent = (dirPath, name) => {
        this.createComponentFolder(dirPath);
        this.createIndex(dirPath, name);
        this.createPresenterClassComponent(dirPath, name);
        this.createContainerClassComponent(dirPath, name);
        return;
    };
    createContainerClassComponent = (dirPath, name) => {
        const indexFilePath = `${dirPath}/${name}Container.js`;
        const content = `import React, { PureComponent } from "react";
import ${name}Presenter from "./${name}Presenter";

class ${name}Container extends PureComponent {
    state = {};
    render() {
        const {} = this.props;
        const {} = this.state;
        return <${name}Presenter {...this.props} />;
    }
}

export default ${name}Container;    
    `;

        this.createFile(indexFilePath, content);
    };
    createPresenterClassComponent = (dirPath, name) => {
        const indexFilePath = `${dirPath}/${name}Presenter.js`;
        const content = `import React, { PureComponent } from "react";

class ${name}Presenter extends PureComponent {    
    render() {
        const {} = this.props;        
        return <>${name} Component!</>
    }
}

export default ${name}Presenter;    
    `;

        this.createFile(indexFilePath, content);
    };
    createFunctionalComponent = (dirPath, name) => {
        this.createComponentFolder(dirPath);
        this.createPresenterComponent(dirPath, name);
        this.createContainerComponent(dirPath, name);
        this.createIndex(dirPath, name);
        return;
    };
    createComponentFolder = (dirPath) => {
        this.createFolder(dirPath);
        return;
    };
    createIndex = (dirPath, name) => {
        const indexFilePath = `${dirPath}/index.js`;
        const content = `import ${name}Container from './${name}Container.js'
export default ${name}Container;`;

        this.createFile(indexFilePath, content);
        return;
    };
    createContainerComponent = (dirPath, name) => {
        const indexFilePath = `${dirPath}/${name}Container.js`;
        const content = `import react from 'react';
import ${name}Presenter from './${name}Presenter';
    
const ${name}Container = () => {
    return <${name}Presenter/>
}
    
export default ${name}Container;`;

        this.createFile(indexFilePath, content);
    };
    createPresenterComponent = (dirPath, name) => {
        const indexFilePath = `${dirPath}/${name}Presenter.js`;
        const content = `import react from 'react';

const ${name}Presenter = () => {
    return <>${name} Component!</>
}

export default ${name}Presenter;`;

        this.createFile(indexFilePath, content);
        return;
    };
}

module.exports = GenerateModule;
