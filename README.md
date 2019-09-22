# Exchange Widget

The main goal of this project is to mimic the look, feel and behavior of the Exchange widget of the Revolut app.

**Table of Contents**

- [Software](#software)
- [Requirements](#requirements)
    - [Recommended software versions](#recommended-software-versions)
- [Setup project](#setup-project)
- [Run project in development](#run-project-in-development-wip)
- [Testing and Linting](#testing-and-linting)

## Software

This test is brought to you by all of these lovely software projects:

### Frameworks & Bundlers

- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [Redux](https://redux.js.org/)
- [Webpack](https://webpack.github.io/)

### Styling

- [Emotion](https://emotion.sh)

### Testing & Code Quality

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)

### Others

- [Yarn](https://yarnpkg.com)

## Requirements

The usage of this app requires the following software to be installed in your machine.

Each software has its own dependencies, please follow the installation instructions as best as you can.

### Recommended software versions

Tested and working on Mac OSX 10.14.6 (Sierra):

| Software                                                                    | Version       |
| --------------------------------------------------------------------------- | ------------- |
| [Yarn.js](https://yarnpkg.com/)                                             | 1.12.1 +      |

**You can install yarn from npm with  `npm install -g yarn` but make sure to follow the website's instructions**

## Setup project
Clone the project to your folder of choice

```
$ git clone https://github.com/wilsonmsalberto/exchange-widget.git
```

Run the following lines in your terminal **while inside the project folder** in order to get/install all the package dependencies:

```
$ yarn
```

## Run project in development

**Start the client**
```
$ yarn start
```

This will run your project in development mode and automatically open a browser window with the project.

Any changes you make will automatically build and refresh the page thus reflecting your changes.

## Testing and Linting

To check the app's tests just run:

```
$ yarn test
```

And to double check on the linting:

```
$ yarn lint
```
