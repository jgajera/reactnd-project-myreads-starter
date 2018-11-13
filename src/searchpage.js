import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DebounceInput from 'react-debounce-input';

import Book from "./bookshelf/Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
    state = {
        query: '',
        booksFound: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.searchDisplay(query)
    }

    searchDisplay = (query) => {
        if (query) {
            BooksAPI.search(query).then((booksFound) => {
                if (booksFound.error) {
                    this.setState({ booksFound: [] });
                } else {
                    this.setState({ booksFound: booksFound })
                }
            })
        } else {
            this.setState({ booksFound: [] });
        }
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                  to="/"
                   className="close-search"
                >
                Close
                </Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput
                        type="text"
                        placeholder="Search by title or author"
                        value = { this.state.query }
                        debounceTimeout={1000}
                        onChange = {
                            (event) => this.updateQuery(event.target.value)}
                    />
                </div>
            </div>
    <div className="search-books-results">
        <ol className="books-grid">
            {
             this.state.booksFound.map(bookFound => {
              let shelf="none";

              this.props.books.map(book =>
               (book.id===bookFound.id ?
                shelf=book.shelf:''
              ));
              
              return (
                <li key={bookFound.id}>
                    <Book
                    book={bookFound}
                    moveShelves={this.props.moveShelves}
                    currentShelf={shelf}
                 />
                </li>
               );
              })
            }
         </ol>
    </div>
</div>

        )
    }



}

export default SearchPage