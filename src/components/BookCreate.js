import { useState, useContext } from "react";
import BooksContext from "../context/boks";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="book-create">
        <h3>Add a book</h3>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </div>
    </form>
  );
}

export default BookCreate;
