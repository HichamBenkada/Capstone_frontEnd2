import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import BookCard from "../components/books/BookCard";
//import css
import "./shop.css";
const API_KEY = "AIzaSyBQszbJE54xMCMbkY46oiXg_rAG5SGogsU" 

const Shop = ({ search }) => {
  const [books, setBooks] = useState([]);
  const[show, setShow] = useState(false);

  axios.defaults.baseURL = "https://www.googleapis.com/books/v1";
  axios.defaults.headers.common["X-goog-api-key"] = API_KEY;

  async function searchBook() {
    await axios.get(`/volumes?q=${search}`)
      .then((res) => {
        setBooks(res.data.items);
        setShow(true);
      })
      .catch((err) => {
        console.error(err);
        setShow(false)
      });
  }

  useEffect(() => {
    searchBook();
  }, [search]);

  return (
    < div className= 'text-center'>
      <div className= 'container'>
       { 
       show && <BookCard books= {books}/>
       } 
      </div>
    </div>
  );
};

export default Shop;