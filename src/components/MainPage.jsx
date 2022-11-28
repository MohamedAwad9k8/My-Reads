import { Link } from "react-router-dom";
import Shelf from "./Shelf.jsx";

const MainPage = ({ books, onBookUpdate }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          key="currentlyReading"
          shelfName="Currently Reading"
          shelfBooks={books}
          onBookUpdate={onBookUpdate}
        />
        <Shelf
          key="wantToRead"
          shelfName="Want to Read"
          shelfBooks={books}
          onBookUpdate={onBookUpdate}
        />
        <Shelf
          key="read"
          shelfName="Read"
          shelfBooks={books}
          onBookUpdate={onBookUpdate}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
  );
};

export default MainPage;
