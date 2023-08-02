import BookShow from "../BookShow/BookShow.component";

const BookList = ({ bookList, setBooks }) => {
  const books = [...bookList.values()];
  console.log(bookList);

  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <BookShow
            key={book.id}
            id={book.id}
            title={book.title}
            books={bookList}
            setBooks={setBooks}
          />
        );
      })}
    </div>
  );
};

export default BookList;
