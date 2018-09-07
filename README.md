# react-filter-highlighted-words

## Setup:

### Prerequistes:
- [NVM](https://github.com/creationix/nvm)
- [yarn](https://yarnpkg.com/)

### Get started

Clone the repo and run the following commands:
- `nvm use` to select the node version<br/>(if you don't have the specified version, run `nvm install` beforehand)
- `yarn` to install all dependencies.
- `yarn start` to run the server

## Usage

### Marking
When the app is running and displayed on browser, on the *Mark!* section you can type or copy anything in the text container, which already has a default _*Lorem Ipsum*_ placeholder - kind of.<br/><br/>

After that, you can select one of the three colors and select some word(s) with your mouse or trackpad. The word(s) should be highllighted with the choosen color.<br/><br/>

If you want, you can click the highlighted word(s) in order to remove the color from it.

### Filtering
On the *Filter!* section, you can selected any combination of colors you want. Having any word(s) highlighted in the selected color inside the container above, you should see all the words displayed for the selected colors on the right-hand side of the bottom row.

### Testing
Run `yarn test` to run unit tests. You can also run `yarn lint` to check for linting errors.