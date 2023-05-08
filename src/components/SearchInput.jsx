import React from "react";

function SearchInput({ searchQuery, onChangeHandler, onSubmitHandler }) {
  return (
    <form className="w-[90%] h-auto m-10" onSubmit={onSubmitHandler}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm font-thin font-serif border-2 border-[#FFFFFF] rounded-lg bg-gray-50 focus:ring-[#920909] focus:border-[#920909] dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#737373] dark:focus:ring-[#920909] dark:focus:border-[#920909] tracking-wide cursor-pointer"
          placeholder="Search in GYMS"
          required=""
          value={searchQuery}
          onChange={(e) => onChangeHandler(e)}
        />
        <button
          type="submit"
          className="text-white font-serif absolute right-2.5 bottom-2.5 bg-[#920909] hover:bg-[#920909] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#920909]dark:hover:bg-[#920909] dark:focus:ring-[#920909] tracking-wide cursor-pointer disabled:opacity-50"
          disabled={searchQuery ? false : true}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
