import { useState } from "react";

import "./BookEdit.styles.css";

const BookEdit = ({ id, books, setBooks, setEditOpen }) => {
  const [value, setValue] = useState(books.get(id).title);

  const readInputHandler = (event) => {
    setValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const currentBook = books.get(id);
    currentBook.title = value;
    setBooks(new Map(books));
    setEditOpen((prev) => !prev);
  };

  return (
    <form className="book-edit-form" onSubmit={onSubmitHandler}>
      <input
        className="book-edit-input"
        type="text"
        value={value}
        onChange={readInputHandler}
      />
      <button className="book-edit-save-btn">Save</button>
    </form>
  );
};

export default BookEdit;
