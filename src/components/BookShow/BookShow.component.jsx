const BookShow = ({ id, title, books, setBooks }) => {
  const onClickHandler = (event) => {
    console.log("Let's remove the book with id ", id);
    console.log(books);
    books.delete(id);
    setBooks(new Map(books));
  };

  return (
    <div className="book-show">
      <span>{title}</span>
      <button onClick={onClickHandler}>X</button>
    </div>
  );
};

export default BookShow;
