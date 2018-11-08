import React, { Component } from 'react';
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
                if(booksFound.error){
                  this.setState({booksFound:[]});
                }
                  else{
                     this.setState({ booksFound: booksFound })
                  }}
            )
        } else {
         this.setState({booksFound:[]});
        }
    }

    render() {
        console.log(this.props.books);
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search"
                    onClick={() => this.setState({
                        showSearchPage: false
                    })}
                >Close</a>
            <div className="search-books-input-wrapper">
            <input type="text"
                    placeholder="Search by title or author"
                    value = { this.state.query }
                    onChange = {
                        (event) => this.updateQuery(event.target.value)}
            />
        </div>
    </div>
    <div className="search-books-results">
        <ol className="books-grid">
            {this.state.booksFound.map(bookFound => (
                <li key={bookFound.id}>
                    <Book
                    book={bookFound}
                     />
                    }
                </li>
                ))
            }
        </ol>
    </div>
</div>
        )
    }
}

export default SearchPage