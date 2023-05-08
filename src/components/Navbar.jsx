import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/datas/Images";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? "bg-[#000] fixed w-full z-20 top-0 left-0"
          : "bg-transparent fixed w-full z-20 top-0 left-0"
      }
    >
      <div className="w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-[#bdb9b9] font-serif bg-[#d21515] hover:bg-[#d21515] focus:ring-4 focus:outline-none focus:ring-[#d21515] font-medium rounded-md text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#d21515] dark:hover:bg-[#d21515] dark:focus:ring-[#d21515] w-[150px] h-[50px] tracking-wide capitalize cursor-pointer"
          >
            Download App
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-evenly hidden w-full md:flex md:w-[60%] md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-[#bdb9b9] font-serif bg-transparent rounded md:bg-transparent md:text-[#aea9a9] md:p-0 md:dark:text-[#fff] text-[22px] font-medium capitalize cursor-pointer tracking-wide"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#aea9a9] md:p-0 md:mx-8 md:dark:text-[#fff] dark:text-[#bdb9b9] dark:hover:bg-transparent dark:hover:text-[#bdb9b9] md:dark:hover:bg-transparent text-[22px] font-medium capitalize cursor-pointer tracking-wide"
              >
                Fitness
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#aea9a9] md:p-0 md:mx-8 md:dark:text-[#fff] dark:text-[#bdb9b9] dark:hover:bg-transparent dark:hover:text-[#bdb9b9] md:dark:hover:bg-transparent text-[22px] font-medium capitalize cursor-pointer tracking-wide"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#aea9a9] md:p-0 md:mx-8 md:dark:text-[#fff] dark:text-[#bdb9b9] dark:hover:bg-transparent dark:hover:text-[#bdb9b9] md:dark:hover:bg-transparent text-[22px] font-medium capitalize cursor-pointer tracking-wide"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 rounded font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#aea9a9] md:p-0 md:dark:text-[#fff] dark:text-[#bdb9b9] dark:hover:bg-transparent dark:hover:text-[#bdb9b9] md:dark:hover:bg-transparent text-[22px] font-medium capitalize cursor-pointer tracking-wide"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
