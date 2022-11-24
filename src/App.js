import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import * as BookApi from "./BooksAPI";

import MainPage from "./components/MainPage";
import Shelf from "./components/Shelf";
import Search from "./components/Search";
import { getByTitle } from "@testing-library/react";
function App() {
  const initialBooks = [
    {
      id: 0,
      url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 1,
      url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      title: "Ender's Game",
      author: "Orson Scott Card",
    },
    {
      id: 2,
      url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      title: "1776",
      author: "David McCullough",
    },
    {
      id: 3,
      url: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
    },
    {
      id: 4,
      url: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
  ];
  let books1 = [initialBooks[0]];
  let books2 = [initialBooks[2], initialBooks[3]];
  let books3 = [initialBooks[4], initialBooks[1]];
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <MainPage />
            <Shelf name="Currently Reading" books={books1} />
            <Shelf name="Want to Read" books={books2} />
            <Shelf name="Read" books={books3} />
            <div className="open-search">
              <Link to="/search">Add a Book</Link>
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/home"
        element={
          <div>
            <MainPage />
            <Shelf name="Currently Reading" books={books1} />
            <Shelf name="Want to Read" books={books2} />
            <Shelf name="Read" books={books3} />
            <div className="open-search">
              <Link to="/search">Add a Book</Link>
            </div>
          </div>
        }
      />
      <Route
        exact
        path="/search"
        element={
          <div>
            <Search />
            <div className="open-search">
              <Link to="/" className="close-search">
                Close
              </Link>
            </div>
          </div>
        }
      />
      <Route exact path="/test" element={<h1>This is Test page</h1>} />
    </Routes>
  );
}

export default App;
