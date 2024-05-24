import { useContext } from "react";
import BooksContext from "../context/boks";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
