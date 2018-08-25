import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksShelf/>

        )}/>

        <Route path='/search' render={({history}) => (
          <SearchPage/>
        )}/>
      
      </div>
    )
  }
}

export default BooksApp
