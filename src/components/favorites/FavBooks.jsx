import React, { useEffect, useState } from "react";
import axios from "axios";

import FavBooksList from "./FavBooksList";

const FavBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBooksDB = async () => {
      const res = await axios
        .get("http://localhost:5050/api/books")
        .then((res) => {
          setBooks(res.data.data);
          console.log(res.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBooksDB();
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold leading-snug">Best Sellers' Books</h1>
      <FavBooksList books={books}/>
    </>
  );
};

export default FavBooks;
