import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  // Get all books from the API into the local State
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  // Update book Shelf
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(currentState => {
        // get the location of the book
        const location = currentState.books.findIndex(c => c.id === book.id)
        // React: Updating state when state is an array of objects
        // concept on stackoverflow 
        //https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects/37663294#
        if (location !== -1){
          return {
            books: [
              ...currentState.books.slice(0,location), 
              Object.assign({}, currentState.books[location], {shelf}),
              ...currentState.books.slice(location+1)
            ]
          }

        }

        const books = currentState.books.slice()
        books.push(Object.assign({}, book, {shelf}))
        return { books }

      })
    })


  }

  // Search Api call
  searchBooks = (query) => {

    return BooksAPI.search(query).then(books => books)
  }



  

  render() {
    const { books } = this.state
    return (

      <div className="app">

        <Route exact path='/' render={() => (
          <BooksShelf
            books={ books }
            onUpdateBookShelf={(book, shelf) => {
              this.updateBookShelf(book, shelf)
            }}
          />

        )}/>

        <Route path='/search' render={({history}) => (
          <SearchPage
            onSearchBooks={this.searchBooks}
            onUpdateBookShelf={this.updateBookShelf}
            books={books}
          />
        )}/>
      
      </div>
    )
  }
}

export default BooksApp
