import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BookGrid(props) {
  const { books, onUpdateBookShelf } = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book book={book} onUpdateBookShelf={onUpdateBookShelf} />
        </li>
      ))}
    </ol>
  );
}

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default BookGrid;
