import { useState } from "react";

import BookList from "./components/BookList/BookList.component";
import BookCreate from "./components/BookCreate/BookCreate.component";

import "./App.css";

function App() {
  const [books, setBooks] = useState(new Map());

  return (
    <main className="main">
      <h1 className="main-title">Reading List</h1>

      <BookList bookList={books} setBooks={setBooks} />

      <BookCreate books={books} setBooks={setBooks} />
    </main>
  );
}

export default App;
