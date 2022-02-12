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
    fetch(`${localStorage.getItem("url")}/api/books`)
      .then((resp) => resp.json().catch(() => ({})))
      .then((books) => {
        setBooks(books.msg);
      })
      .catch((e) => console.error(e));
  }, []);
  return books;
}
