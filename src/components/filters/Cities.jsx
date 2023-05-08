import React from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";

function Cities({
  items,
  isOpen,
  selectedItem,
  toggleDropdown,
  handleItemClick,
}) {
  return (
    <div className="dropdown w-full bg-transparent overflow-hidden border-2 dark:border-gray-600 rounded-sm text-start text-gray-400 font-serif pt-2 font-thin tracking-wide cursor-pointer text-sm">
      <div
        className="dropdown-header py-[10px] px-[16px] cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {selectedItem
          ? items.find((item) => item === selectedItem)
          : "Select City"}
        {isOpen ? (
          <MdOutlineArrowDropUp className="text-[20px] text-gray-400 font-serif transition ease-in-out delay-150 hover:text-white" />
        ) : (
          <MdOutlineArrowDropDown className="text-[20px] text-gray-400 font-serif transition ease-in-out delay-150 hover:text-white" />
        )}
      </div>

      {isOpen && (
        <div
          className={`dropdown-body p-[5px] border-t-[1px] border-gray-400 font-serif `}
        >
          {items &&
            items.map((item, i) => (
              <div
                key={i}
                className="dropdown-item p-[10px] hover:cursor-pointer flex hover:text-white"
                onClick={(e) => handleItemClick(item)}
                id={item.city}
              >
                <span className=" font-serif transition ease-in-out delay-150 text-lg text-white text-[20px]">
                  {item === selectedItem ? (
                    <BsDot className="opacity-10" />
                  ) : (
                    <BsDot className="opacity-0" />
                  )}
                </span>

                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Cities;
