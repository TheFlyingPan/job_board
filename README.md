# Job Board

Instant Score is a chrome extension designed for musician to make the task of finding public domain music sheet easier 

## Installation

I am using node.js for the back-end application so we will use the npm package manager to install all the necessary dependencies.

```bash
cd back
npm install
```
To install the extension you have to go to the extension tab in chrome, activate the developer mode in the top right, and click the "Load Unpacked extension".
Choose the bpm folder in the github repository and you'll normally see the extension icon pop in your browser.

## Usage

To use the extension you have to start the back end server at first, so do
```bash
npm start
```

The extension will only work on Youtube and to use it just choose the music of your choice and if the the musci sheet is available, the icon will change color in the top right of your screen.