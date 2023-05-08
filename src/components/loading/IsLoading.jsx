import React from "react";
import { DumbbleGirl } from "../../assets/datas/Images";

function IsLoading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-[#000]">
      <img src={DumbbleGirl} alt="Loading" className="object-contain" />
    </div>
  );
}

export default IsLoading;
