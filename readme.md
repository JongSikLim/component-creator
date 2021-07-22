# react-cnp-component-creator

[![npm version](https://badge.fury.io/js/react-cnp-component-creator.svg)](https://badge.fury.io/js/react-cnp-component-creator)

Generates react components based on the Container&Presenter pattern. <br>
Support Both class and functional components!

## 💡Installation

```bash
$ npm install -g react-cnp-component-creator
```

## 📖Usage

Generate component to the directory where you want.

```bash
$ crc -n <component-name> -d <directory-name>
```

Can skip directory-name (default directory : src/)

```bash
$ crc -n <component-name>
```

Will make 3 files.

```bash
$ crc -n example // The first character is automatically converted to uppercase.

CREATE src/Example/ExamplePresenter.js
CREATE src/Example/ExampleContainer.js
CREATE src/Example/index.js
```

Can make class component

```bash
$ crc -n <component-name> -c
```

## ⚙️Options

| name      | alias | description                                  |
| --------- | ----- | -------------------------------------------- |
| name      | n     | Name of component will create                |
| directory | d     | Path of component will create (default: src) |
| classType | c     | Create a component a class component         |

<br>

## 📑File Content

##### index.js

```js
import ExampleContainer from "./ExampleContainer.js";
export default ExampleContainer;
```

##### ExampleContainer.js

```js
import react from "react";
import ExamplePresenter from "./ExamplePresenter";

const ExampleContainer = () => {
    return <ExamplePresenter />;
};

export default ExampleContainer;
```

##### ExamplePresenter.js

```js
import react from "react";

const ExamplePresenter = () => {
    return <></>;
};

export default ExamplePresenter;
```

### class component

##### ExampleContainer.js

```js
import React, { PureComponent } from "react";
import ExamplePresenter from "./ExamplePresenter";

class ExampleContainer extends PureComponent {
    state = {};
    render() {
        const {} = this.props;
        const {} = this.state;
        return <ExamplePresenter {...this.props} />;
    }
}

export default ExampleContainer;
```

##### ExamplePresenter.js

```js
import React, { PureComponent } from "react";

class ExamplePresenter extends PureComponent {
    render() {
        const {} = this.props;
        return <>Example Component!</>;
    }
}

export default ExamplePresenter;
```

## 😵Check list

Can't overide existing folder & file. <br>
