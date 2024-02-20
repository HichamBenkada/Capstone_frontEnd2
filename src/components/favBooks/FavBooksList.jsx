import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./favBooks.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function FavBooksList({ books, headline }) {
  return (
    <>
      <div className="container">
        <h2>{headline}</h2>
      </div>
      <div>
      </div>
          </>
  );
}
