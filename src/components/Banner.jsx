import React from "react";
import BannerCards from "./banner/BannerCards";
import SearchBar from "./banner/SearchBar";

const Banner = ({setSearch}) => {

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* leftSide banner */}
        <div className="md:w-1/2 space-y-8 h-full">
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
          <SearchBar setSearch={ setSearch }/>
        </div>
      </div>

      {/* rightSide banner */}
      <div className = "w-1/2">
        <div className="flex justify-center items-center">
        <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
