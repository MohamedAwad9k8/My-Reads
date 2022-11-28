import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import * as BookAPI from "./BooksAPI";
import MainPage from "./components/MainPage";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooks(res);
    };
    getBooks();
  });

  const updateBooks = (selectedBook, newShelf) => {
    if (!books.filter((book) => book.id === selectedBook.id)) {
      setBooks(...books, selectedBook);
    }

    const updatedBooks = books.map((book) => {
      if (book.id === selectedBook.id) {
        book.shelf = newShelf;
      }
      return book;
    });
    setBooks(updatedBooks);
    BookAPI.update(selectedBook, newShelf);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} onBookUpdate={updateBooks} />}
      />
      <Route
        exact
        path="/search"
        element={<Search onBookUpdate={updateBooks} books={books} />}
      />
    </Routes>
  );
}

export default App;
