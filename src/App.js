import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/boks";

function App() {

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks()
  }, []);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate  />
    </div>
  );
}

export default App;
