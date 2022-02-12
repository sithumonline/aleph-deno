import { useEffect, useState } from "react";

interface BookSchema {
  _id: string;
  title: string;
  author: String;
  description: String;
  updated_date: Date;
}

export function booksGetter(): BookSchema[] {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/books")
      .then((resp) => resp.json().catch(() => ({})))
      .then((books) => {
        setBooks(books.msg);
      })
      .catch((e) => console.error(e));
  }, []);
  return books;
}
