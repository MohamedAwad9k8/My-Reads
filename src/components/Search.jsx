import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as BookAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ onBookUpdate, books }) => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    // if (e.target.value === "l" || e.target.value === "li") {
    //   setQuery("lin");
    // } else if (e.target.value === "b") {
    //   setQuery("ba");
    // } else {
    //   setQuery(e.target.value);
    // }
    setQuery(e.target.value);
  };

  useEffect(() => {
    let isUIMounted = true;
    const searchBooks = async () => {
      const res = await BookAPI.search(query.trim());
      //Checks the API Response, in case of error, sets the results to an empty array
      if (res.error) {
        setResults([]);
      } else {
        //Checks if the UI component is mounted, it updates the state
        if (isUIMounted) {
          //Read the shelf state from the user books
          const searchResults = res.map((book) => {
            //Checking for books with missing cover url property
            if (book.imageLinks === undefined) {
              book.imageLinks = "";
            }
            for (let i = 0; i < books.length; i++) {
              if (book.id === books[i].id) {
                book.shelf = books[i].shelf;
              }
            }
            return book;
          });
          setResults(searchResults);
        }
      }
    };
    // only call the function if there's a query
    if (query) {
      searchBooks();
    }

    //Clean Up Funtion, sets the UI component to unmounted so that the state can't be updated
    return () => {
      isUIMounted = false;
      setResults([]);
    };
  }, [query]);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {results !== undefined &&
              results.map((result) => (
                <li key={result.id}>
                  <Book
                    title={result.title}
                    author={result.authors}
                    url={result.imageLinks.thumbnail}
                    shelf={result.shelf}
                    onBookUpdate={onBookUpdate}
                    book={result}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
