import React from 'react'
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

const Shelf = ({title, books, setBooks}) => {
  const updateBooks = () => { BooksAPI.getAll().then((books) => { setBooks(books) }) };
  //Why is this manual update needed??
  return (
    <div className="bookshelf" onChange={updateBooks}>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => ( <Book key={book.id} book={book} /> ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;