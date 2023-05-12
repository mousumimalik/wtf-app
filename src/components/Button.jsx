import React from "react";

function Button(props) {
  return (
    <button className="bg-[#d21515] text-white px-5 py-2 mt-3 md:mt-10 cursor-pointer font-semibold font-serif tracking-wide rounded-sm hover:bg-red-500">
      {props.text}
    </button>
  );
}

export default Button;
