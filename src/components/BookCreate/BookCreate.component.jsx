import { useState } from "react";

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
    <div className="book-craeate">
      <form className="book-create-form" onSubmit={onSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={value}
          onChange={onChangeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
