import BookChanger from "./BookChanger";

const Book = ({ title, author, url, shelf, book, onBookUpdate }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${url})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <BookChanger
            key={`${book.id}changer`}
            bookShelf={shelf}
            book={book}
            onBookUpdate={onBookUpdate}
          />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
};

export default Book;
