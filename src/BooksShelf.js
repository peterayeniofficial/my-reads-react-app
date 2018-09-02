import React, { Component } from 'react'
import ProTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'

class BooksShelf extends Component {

    static ProTypes = {
        books: ProTypes.array.isRequired
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
                    <ol className="books-grid">
                        {
                          currentlyReadingBooks.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                   <BookShelfChanger shelf={book.shelf} onUpdateBookShelf={shelf => onUpdateBookShelf(book, shelf)} />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                          ))
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                          wantToReadBooks.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger shelf={book.shelf} onUpdateBookShelf={shelf => onUpdateBookShelf(book, shelf)} />


                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                          ))
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                    {
                          readBooks.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger shelf={book.shelf} onUpdateBookShelf={shelf => onUpdateBookShelf(book, shelf)} />


                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                          ))
                        }
                      
                    </ol>
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
