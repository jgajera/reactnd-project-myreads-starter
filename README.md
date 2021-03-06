## Table of Contents
* [Intro](#intro)
* [App overview](#overview)
* [TL;DR](#tldr)
* [File structure](#file-structure)
* [Backend Server](#backend)
* [Important](#important)
* [Contributing](#contributing)
* [Resources Used](#resources)

## Intro

I used a starter template for this final assessment project for Udacity's React Fundamentals course. In this template, I received a static example of the CSS and HTML markup that may be used, but no React code needed to complete the project. By choosing to start with this template, I had to add interactivity to the app by refactoring the static code in this template.

## Overview
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
* Currently Reading
* Want to Read
* Read
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## File structure
```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Resources
Below are the resources I used for this project:
* [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
* Maeva's [tutorial](https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be&t=307)
* Very basic StackOverflow articles that taught me a lot -
    - [Pass props to parent component in React.js](https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js) - the connection between props, attributes, and state finally clicked
    - [Uncaught TypeError: Cannot read property 'state' of undefined - React](https://stackoverflow.com/questions/43942239/uncaught-typeerror-cannot-read-property-state-of-undefined-react) - the .onChange method made more sense after reading this thread
    - [How to update parent's state in React?](https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react) - learned more about data transfer between components
* Tyler's React Elements vs React Components [article](https://tylermcginnis.com/react-elements-vs-react-components/)
* The Udacity rubric for this project is located [here](https://review.udacity.com/#!/rubrics/918/view)