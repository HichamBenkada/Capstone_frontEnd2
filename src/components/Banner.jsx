import React from "react";
import BannerCards from "./banner/BannerCards";

const Banner = () => {

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* leftSide banner */}
        <div className="md:w-1/2 space-y-4 h-full">
          <h2 className="text-4xl font-bold leading-snug">
            Find Your Favorite Books 
            <span className="text-blue-700"> With Best Prices</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            officia quos quibusdam quisquam laborum eos itaque est, et saepe
            qui! Fuga ea dolorum tenetur nobis explicabo, incidunt rem nihil
            ullam?
          </p>
          <div>
            <input
              type="search"
              name="search"
              placeholder="Search a book"
              className="outline-none py-2 px-2 rounded-6-sm"
            />
            <button className="bg-blue-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* rightSide banner */}
      <div className="w-1/2">
        <div className="flex justify-center items-center">
        <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;