import React, { Component } from 'react'
import ProTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'

class BooksShelf extends Component {

    static ProTypes = {
        books: ProTypes.array.isRequired,
        onUpdatedBookShelf: ProTypes.func.isRequired
    }



    render(){
        const { books, onUpdateBookShelf } = this.props

        const currentlyReadingBooks = books.filter((book) => (
            book.shelf === 'currentlyReading'
        ))

        const wantToReadBooks = books.filter((book) => (
            book.shelf === 'wantToRead'
        ))

        const readBooks = books.filter((book) => (
            book.shelf === 'read'
        ))

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <BookGrid books={currentlyReadingBooks} onUpdateBookShelf={onUpdateBookShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid books={wantToReadBooks} onUpdateBookShelf={onUpdateBookShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid books={readBooks} onUpdateBookShelf={onUpdateBookShelf}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default BooksShelf
