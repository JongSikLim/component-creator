# react-cnp-component-creator

[![npm version](https://badge.fury.io/js/react-cnp-component-creator.svg)](https://badge.fury.io/js/react-cnp-component-creator)

Generates react components based on the Container&Presenter pattern.

## Installation

```bash
$ npm install -g react-cnp-component-creator
```

## Usage

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
$ crc -n example

CREATE src/Example/ExamplePresenter.js
CREATE src/Example/ExampleContainer.js
CREATE src/Example/index.js
```

## File Content

index.js

```js
import ExampleContainer from "./ExampleContainer.js";
export default ExampleContainer;
```

ExampleContainer.js

```js
import react from "react";
import ExamplePresenter from "./ExamplePresenter";

const ExampleContainer = () => {
    return <ExamplePresenter />;
};

export default ExampleContainer;
```

ExamplePresenter.js

```js
import react from "react";

const ExamplePresenter = () => {
    return <></>;
};

export default ExamplePresenter;
```

## Check list

Can't overide existing folder & file. <br>
