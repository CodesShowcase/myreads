# MyReads

This is a small [React](https://reactjs.org/) webapp which displays the amazing abilities of the Javascript library.

## Functionality

The webapp allows you to search for books and place them on three shelves - currently reading, read and want to read.

### Search Terms

Please note, that the search terms in this project are limited. You will find a full list in [SEARCH_TERMS.md](SEARCH_TERMS.md).

## Structure of the Project
```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.js
    ├── Components
    │   ├── Book.jsx
    │   └── Shelf.css
    ├── css
    │   ├── index.css
    │   └── Layout.css
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── utils
    │   └── BooksAPI.js
    ├── views
    │   ├── Home.jsx    
    │   └── Search.jsx
    └── index.js
```

## Installation and Starting

Please clone this repository with [GIT](https://git-scm.com/) or download it on your pc. Install [Node.js](https://nodejs.org/), if you not already have. Type in **npm install**, start the project with **npm start** and continue in your browser. It was tested with [Chrome](https://www.chrome.com), but should also work on other browsers.

### yarn

Should also be possible - but was not tested - in this case use **yarn install** and **yarn start**

## Building

It was never tested to build the webapp, but you can try with **npm run build** or **yarn build**.
In this case you will get the app for production in the **build folder**.

## Original Template

The original template you will find at [MyReads Starter of the Project](https://github.com/udacity/nd0191-c1-myreads/).