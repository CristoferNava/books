import { useState } from "react";

import BookEdit from "../BookEdit/BookEdit.component";

import "./BookShow.styles.css";

const BookShow = ({ id, title, books, setBooks }) => {
  const [editOpen, setEditOpen] = useState(false);

  const editBookHandler = () => {
    setEditOpen(!editOpen);
  };

  const removeBookHandler = () => {
    books.delete(id);
    setBooks(new Map(books));
  };

  return (
    <div className="book-show">
      <div className="book-show-options">
        <button className="edit-book" onClick={editBookHandler}>
          Edit
        </button>
        <button className="delete-book" onClick={removeBookHandler}>
          X
        </button>
      </div>
      <h3 className="book-title">{title}</h3>

      {editOpen && (
        <BookEdit
          id={id}
          books={books}
          setBooks={setBooks}
          setEditOpen={setEditOpen}
        />
      )}
    </div>
  );
};

export default BookShow;
