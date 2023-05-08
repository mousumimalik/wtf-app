import React from "react";

function SearchInpLoc() {
  return (
    <div className="w-full">
      <div className="relative flex items-center w-full h-12 rounded-sm focus-within:shadow-lg bg-transparent overflow-hidden border-2 dark:border-gray-600">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="peer h-full w-full outline-none text-gray-400 font-serif dark:placeholder-gray-400 pr-2 bg-transparent text-sm font-thin tracking-wide cursor-pointer"
          type="text"
          id="search"
          placeholder="Search Location.."
        />
      </div>
    </div>
  );
}

export default SearchInpLoc;
