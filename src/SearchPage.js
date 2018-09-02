import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import  propTypes from 'prop-types'
import BookGrid from './BookGrid'

class SearchPage extends Component{
    static propTypes = {
        onSearchBooks: propTypes.func.isRequired,
        books: propTypes.array.isRequired,
        onUpdateBookShelf: propTypes.func.isRequired

    }

    state = {
        query: '',
        returnBooks: []
    }
    // update query in the local state
    updateQuery = (query) => {
        this.setState({
            query
        })
        // Avoid ajax call if the search input box is empty
        if (!query){
            this.setState({returnBooks: []})
            return
        }
        this.props.onSearchBooks(query).then(res => {
            if (res) {
                // catch respond err
                if(res.error){
                    this.setState({returnBooks: []})
                }else{
                    this.setState(() => ({
                        returnBooks: res
                    }))
                }
            }
        })
    }


    render(){
        const { returnBooks } = this.state
        const { onUpdateBookShelf, books } = this.props
        const searchedBooks = returnBooks.map(book => {
            const bookInShelf = books.find( b => b.id === book.id)
            return Object.assign({}, bookInShelf, book)
        })
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <DebounceInput
                    type="text" 
                    placeholder="Search by title or author"
                    debounceTimeout={300}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />

              </div>
            </div>
            <div className="search-books-results">
              <BookGrid books={searchedBooks} onUpdateBookShelf={onUpdateBookShelf}/>
            </div>
          </div>
        )
    }
}

export default SearchPage