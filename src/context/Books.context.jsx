import { createContext, useState } from "react";

const initialValue = {
  books: new Map(),
  setBooks: () => {},
};

const BooksContext = createContext(initialValue);

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(new Map());
  const value = { books, setBooks };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
