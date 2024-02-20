import React, { useEffect, useState } from "react";
import axios from "axios";

//import books component
import FavBooksList from "./favBooks/FavBooksList";

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
    <div>
      {loading ? (
        <FavBooksList books={books} headline="Best Seller Books" />
      ) : (
        ""
      )}
    </div>
  );
};

export default FavBooks;
