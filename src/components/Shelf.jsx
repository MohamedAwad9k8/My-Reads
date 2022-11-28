import Book from "./Book.jsx";

const Shelf = ({ shelfName, shelfBooks, onBookUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {shelfBooks.map(
            (book) =>
              shelfName.toLowerCase().replace(/\s/g, "") ===
                book.shelf.toLowerCase().replace(/\s/g, "") && (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    author={book.authors}
                    url={book.imageLinks.thumbnail}
                    shelf={book.shelf}
                    onBookUpdate={onBookUpdate}
                    book={book}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Shelf;
