import React from "react";
import { Link } from "react-router-dom";

class Book extends React.Component {
  switchShelfName() {
    const shelfNames = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want To Read",
      read: "Read",
    };
    return shelfNames[this.props.book.shelf] || "None";
  }

  render() {
    const { book, updateBook } = this.props;
    const thumbnail = (book.imageLinks && book.imageLinks.thumbnail) || "";
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url("${thumbnail}")`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf || "none"}
                onChange={(e) => updateBook(book, e.target.value)}
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
          </div>
          <div className="book-title">
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </div>
          <div className="book-authors">
            {book.authors && book.authors[0] ? book.authors[0] : "No Author..."}
          </div>
          <div className="book-authors">{this.switchShelfName()}</div>
        </div>
      </li>
    );
  }
}

export default Book;