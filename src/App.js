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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <BooksShelf
            books={this.state.books}
          />

        )}/>

        <Route path='/search' render={({history}) => (
          <SearchPage/>
        )}/>
      
      </div>
    )
  }
}

export default BooksApp
