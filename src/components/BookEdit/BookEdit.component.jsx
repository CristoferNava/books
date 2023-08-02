import { useState } from "react";

const BookEdit = ({ id, books, setBooks, setEditOpen }) => {
  const [value, setValue] = useState(books.get(id).title);

  const readInputHandler = (event) => {
    setValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Change to the new title
    const currentBook = books.get(id);
    currentBook.title = value;
    setBooks(new Map(books));
    setEditOpen((prev) => !prev);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={value} onChange={readInputHandler} />
      <button>Save</button>
    </form>
  );
};

export default BookEdit;
