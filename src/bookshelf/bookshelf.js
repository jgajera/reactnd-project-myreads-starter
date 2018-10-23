import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import AlreadyRead from './AlreadyRead'

class Bookshelf extends Component {
    render() {
            return (
                    <div className="list-books">
    <div className="list-books-title">
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        <div>
            <CurrentlyReading />
            <WantToRead />
            <AlreadyRead />
        </div>
    </div>
    <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>
</div>
        )
    }


}



export default Bookshelf