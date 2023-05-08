import React from "react";
import { BiMap } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Logo } from "../assets/datas/Images";

function Footer() {
  return (
    <footer className="bg-[#000000] dark:bg-[#000000] w-full">
      <div className="mx-auto w-[70%] p-4 py-6 lg:py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-6 sm:grid-cols-4">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                className="w-24 h-8 mr-3 object-cover"
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold dark:text-[#fff] capitalize tracking-wide font-serif">
              Quick links
            </h2>
            <ul className="w-auto h-auto flex flex-col justify-center items-start text-[#fff] text-sm font-normal list-none font-serif">
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  About
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  FAQs
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Refund & Cancellation
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold dark:text-[#fff] capitalize tracking-wide font-serif">
              Explore
            </h2>
            <ul className="w-auto h-auto flex flex-col justify-center items-start text-[#fff] text-sm font-normal list-none font-serif">
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className=" ">
                  Arenas
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Studios
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Nutrition
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft">
                <Link to="/" className="">
                  Personal Trainer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold dark:text-[#fff] capitalize tracking-wide font-serif">
              Contact
            </h2>
            <ul className="w-auto h-auto flex flex-col justify-center items-start text-[#fff] text-sm font-normal list-none font-serif">
              <li className="mb-4 cursor-pointer list-none hover:animate-slideleft text-start">
                <Link
                  to="/"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <BiMap className="text-[50px] mr-3" />
                  RO:- S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar
                  Pradesh, India
                </Link>
              </li>
              <li className="mb-4 cursor-pointer list-none hover:animate-slideleft text-start">
                <Link
                  to="/"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <BiMap className="text-[60px] mr-3" />
                  HO:- 3rd Floor, The Corenthum, India Accelerator, Sector 62,
                  Noida, Uttar Pradesh 201301
                </Link>
              </li>
              <li className="mb-4 cursor-pointer list-none hover:animate-slideleft text-start">
                <Link
                  to="/"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <IoCall className="text-2xl mr-3" />
                  +919090639005
                </Link>
              </li>
              <li className="mb-2 cursor-pointer list-none hover:animate-slideleft text-start">
                <Link
                  to="/"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <MdEmail className="text-2xl mr-3" />
                  support@wtfup.me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
