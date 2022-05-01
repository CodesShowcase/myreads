import "./css/Layout.css";
import Home from "./views/Home";
import Search from "./views/Search";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as BooksAPI from './utils/BooksAPI'

function App() {
   const [books, setBooks] = useState([]);
   useEffect(() => { BooksAPI.getAll().then((books) => { setBooks(books) })}, [books.length]);

  return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/search" element={<Search books={books} setBooks={setBooks} />} />
        // <Route path="*" element={ <main style={{ padding: "1rem" }}> <h1>404 - Please go back to base directory!</h1></main> } />
        // This will crash the whole app...
     </Routes>
     </BrowserRouter>
   );
}

export default App;