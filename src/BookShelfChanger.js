import React, { Component }  from 'react'
import propTypes from 'prop-types'

class BookShelfChanger extends Component {
    static propTypes = {
        shelf: propTypes.string,
        onUpdateBookShelf: propTypes.func.isRequired
    }
    render(){

        const {shelf, onUpdateBookShelf } = this.props
        return(
             <div className="book-shelf-changer">
                    <select value={shelf} onChange={(event) => onUpdateBookShelf(event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
            </div>
        )
    }
}

export default BookShelfChanger