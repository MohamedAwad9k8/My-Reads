const BookChanger = ({ bookShelf, book, onBookUpdate }) => {
  return (
    <select
      defaultValue={bookShelf ? bookShelf : "none"}
      onChange={(e) => {
        onBookUpdate(book, e.target.value);
      }}
    >
      <option value="Move To" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

export default BookChanger;
