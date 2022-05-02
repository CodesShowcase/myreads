import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from '../components/Book';
import "../css/Layout.css";

const Search = ({books}) => {

  const [query, setQuery] = useState('');
  const [bookSearch, setBookSearch] = useState([]);
  const updateQuery = (query) => {
    BooksAPI.search(query)
    .then(booksFromSearch => {
      booksFromSearch.forEach(book => {
       console.log(book);
      });
      booksFromSearch.forEach(book => {
        book.shelf = "none";
        if (books.filter(mybook => mybook.shelf === 'currentlyReading').find(mybook => mybook.id === book.id)) {book.shelf = "currentlyReading"}
        if (books.filter(mybook => mybook.shelf === 'wantToRead').find(mybook => mybook.id === book.id)) {book.shelf = "wantToRead"}
        if (books.filter(mybook => mybook.shelf === 'read').find(mybook => mybook.id === book.id)) {book.shelf = "read"}
      });
      setBookSearch(booksFromSearch);
  });
  }

  useEffect(() => {
    (!query) ? setBookSearch([]) : updateQuery(query);

}, [query]);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Search</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" value={query} onInput={(e) => setQuery(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearch.map(book => ( <Book key={book.id} book={book} /> ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Search;

