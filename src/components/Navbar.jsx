import React, { useEffect, useState } from "react";
import {
  FaBarsStaggered,
  FaRegIdBadge,
  FaBlog,
  FaXmark,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu with show/hide state
  const toggleShow = () => setShow(!show);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Manue Items:
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duratrion-300 z-10">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? "stucky top-0 left-0 right-0 bg-blue-100" : ""
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <div>
            {/* logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700 flex items-center gab-1"
            >
              <FaBlog className="inline-block" />
              Books
            </Link>
          </div>
          {/* Navigation items */}
          <ul className="md:flex space-x-12 hidden">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block text-base uppercase
              cursor-pointer
              text-blue-400
              hover:text-blue-800"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <Link
            to="/login"
            className=" cursor-pointer
              text-blue-400
              hover:text-blue-800"
          >
            <FaRegIdBadge className="size-6"/>
          </Link>
        </div>
        {/* for mobile devices */}
        <div className="md:hidden">
          <button onClick={toggleShow}>
            {show ? (
              <FaXmark className="h-5 w-5 text-blue-400 hover:text-blue-800" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-blue-400 hover:text-blue-800" />
            )}
          </button>
        </div>
        <div>
          {show && (
            <ul className="md:hidden m-1 p-4 w-[50%] bg-blue-100 rounded-lg text-center">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block text-base uppercase
                    cursor-pointer
                    text-blue-400
                    hover:text-blue-800"
                  onClick={toggleShow}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
