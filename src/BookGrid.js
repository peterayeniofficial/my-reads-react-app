import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class BookGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired

    }

    render(){
        const {books, onUpdateBookShelf} = this.props
        return(
            <ol className="books-grid">
                    {
                          books.map((book) => (
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
        )
    }
}

export default BookGrid