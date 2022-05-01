import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI'
import Shelf from '../components/Shelf';


const Home = ({books, setBooks}) => {

useEffect(() => { BooksAPI.getAll().then((books) => { setBooks(books) })}, [books, books.length,setBooks]);

    const [ currentlyReading, setCurrentlyReading ] = useState([]);
    const [ wantToRead, setWantToRead ] = useState([]);
    const [ read, setRead ] = useState([]);
    //This is not changeable
    
    useEffect(() => {
      const activeBooks = books.filter(book => book.shelf !== 'none');
      setCurrentlyReading(activeBooks.filter(book => book.shelf === 'currentlyReading'));
      setWantToRead(activeBooks.filter(book => book.shelf === 'wantToRead'));
      setRead(activeBooks.filter(book => book.shelf === 'read'));
    }, [books]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title="Currently Reading" books={currentlyReading} setBooks={setBooks} />
          <Shelf title="Want to Read" books={wantToRead} />
          <Shelf title="Read" books={read} setBooks={setBooks} />
          <div className="open-search">
            <Link to="/search">Search</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;