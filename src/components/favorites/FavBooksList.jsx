import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './fav.css';

// import required modules
import { Pagination } from "swiper/modules";

function FavBooksList({ books }) {
  return (
    <div className="my-16 px-4 lg-24">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <Link to="/">
              <div>
                <img src={book.imageURL} alt={book.title} />
              </div>
              <div>
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
                <pre>Price: $10</pre>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FavBooksList;
