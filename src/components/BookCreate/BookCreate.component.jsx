import { useState } from "react";

import "./BookCreate.styles.css";

const BookCreate = ({ books, setBooks }) => {
  const [value, setValue] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const book = { id: crypto.randomUUID(), title: value };
    books.set(book.id, book);
    setBooks(new Map(books));
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="book-create-form" onSubmit={onSubmitHandler}>
      <label htmlFor="title">Add a new book</label>
      <input
        id="title"
        className="book-create-form-input"
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
      <button className="book-create-form-btn">Add book</button>
    </form>
  );
};

export default BookCreate;
