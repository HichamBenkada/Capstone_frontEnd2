import React from "react";



const BookCard = ({ books }) => {
  // console.log(books);
  return(
    <>
    <h1 className="py-100 text-4xl font-bold leading-snug"> Best Books Results </h1>
    {
      books.map((item) => {
        return(
          <div className="card" key={item.id}>
            <img className= 'w-full' src = {item.volumeInfo.imageLinks.smallThumbnail} alt="Book" />
            <div>
            <h2>
              {item.volumeInfo.title}
            </h2>
            <p>
              {item.volumeInfo.authors}
            </p>
            </div>
            <div>$10</div>
          </div>
        )
      })
    }
    </>
  )
};

export default BookCard;
