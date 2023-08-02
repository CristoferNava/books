import { useState } from "react";

import BookEdit from "../BookEdit/BookEdit.component";

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
      <span>{title}</span>
      <button onClick={editBookHandler}>Edit</button>
      <button onClick={removeBookHandler}>X</button>

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
