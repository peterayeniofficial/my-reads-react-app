import React from "react";
import propTypes from "prop-types";

function BookShelfChanger(props) {
  const { shelf, onUpdateBookShelf } = props;
  return (
    <div className="book-shelf-changer">
      <select
        value={shelf || "none"}
        onChange={event => onUpdateBookShelf(event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  shelf: propTypes.string,
  onUpdateBookShelf: propTypes.func.isRequired
};
export default BookShelfChanger;
