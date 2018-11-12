import React from "react";
import { Route } from 'react-router-dom'

import SearchPage from "./searchpage";
import Bookshelf from "./bookshelf/bookshelf";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books });
        });
    }

    moveShelves = (book, shelf) => {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then(books => {
            this.setState({ books: books });
        });
    }

    render() {
        return (
            <div className="app">
             <Route exact path='/' render={() => (
                   <Bookshelf
                     books={this.state.books}
                     moveShelves={this.moveShelves}
                   />
             )}/>
            <Route path='/search' render={() => (
                   <SearchPage 
                    books={this.state.books}
                    moveShelves={this.moveShelves}
                  />

            )}/>
           </div>
        );
    }
}

export default BooksApp;