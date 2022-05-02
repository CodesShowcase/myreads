import React from 'react'
import * as BooksAPI from '../utils/BooksAPI';

function Book ({book}) {
  const backgroundImage = book.imageLinks ? book.imageLinks.thumbnail : 'url("https://via.placeholder.com/128x193?text=No%20Cover")';
  const title = book.title ? book.title : 'No Title';
  const authors = book.authors ? book.authors.join('\n') : 'Unknown Author';
  // For some reasons JSON Special Chars like \n do not really work...
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${backgroundImage}")` }}>
            <div className="book-shelf-changer">
              <select defaultValue={`${book.shelf}` || 'none'} onChange={(e) => { BooksAPI.update(book, e.target.value); }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
}

export default Book;