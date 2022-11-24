import Book from "./Book.jsx";

const Shelf = (props) => {
  console.log(props.name);
  console.log(props.books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li>
              <Book url={book.url} title={book.title} author={book.author} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
