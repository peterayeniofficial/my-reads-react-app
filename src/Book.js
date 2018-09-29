import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
import defaultThumbnail from "./defaultThubnal.png";

function Book(props) {
  const { book, onUpdateBookShelf } = props;
  const bookCoverStyle = {
    width: 128,
    height: 193
  };
  if (book.imageLinks && book.imageLinks.thumbnail) {
    bookCoverStyle.backgroundImage = `url(${book.imageLinks.thumbnail})`;
  } else {
    bookCoverStyle.backgroundImage = `url(${defaultThumbnail})`;
  }
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={bookCoverStyle} />
        <BookShelfChanger
          shelf={book.shelf}
          onUpdateBookShelf={shelf => onUpdateBookShelf(book, shelf)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default Book;
