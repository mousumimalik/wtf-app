import React from "react";
import { Link } from "react-router-dom";
import { Workout } from "../assets/datas/Images";
import Button from "./Button";

function AllGyms({ gymData }) {
  return (
    <>
      <div className="w-full md:w-[95%] h-auto grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        {gymData &&
          gymData.map((gym, i) => (
            <div
              key={i}
              className="h-[600px] md:h-[400px] flex flex-col md:flex-row justify-between items-center rounded-lg shadow-lg shadow-[#394867]"
            >
              <>
                <div className="w-full md:w-[40%] h-[50%] md:h-full">
                  {/* {gym.gallery &&
                    gym.gallery.map((img) => (
                      <img
                        key={img.id}
                        src={img.images ? img.images : Workout}
                        alt={gym.category_name && gym.category_name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    ))} */}
                  <img
                    src={gym.cover_image ? gym.cover_image : Workout}
                    alt={gym.category_name && gym.category_name}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="w-full md:w-[60%] h-[60%] md:h-full flex flex-col justify-start items-center p-3 md:p-8">
                  <h4 className="text-white text-[25px] font-semibold font-serif tracking-wide mb-4 capitalize text-center">
                    {gym.gym_name && gym.gym_name}
                  </h4>
                  <p className="text-white text-[20px] font-medium font-serif tracking-wide capitalize text-center pb-2 flex flex-wrap">
                    Address:{" "}
                    <span className="font-thin ml-1 mr-1">
                      {gym.address2 && gym.address2}
                      {","}
                    </span>
                    <span className="font-thin">{gym.state && gym.state}</span>
                  </p>
                  <p className="text-white text-[20px] font-medium font-serif tracking-wide capitalize text-center pb-2">
                    Category:{" "}
                    <span className="font-thin">
                      {gym.category_name && gym.category_name}
                    </span>
                  </p>
                  <p className="text-white text-[20px] font-medium font-serif tracking-wide capitalize text-center pb-2">
                    Description:{" "}
                    <span className="font-thin">
                      {gym.description && gym.description.substring(0, 11)}
                    </span>
                  </p>
                  <p className="text-white text-[20px] font-medium font-serif tracking-wide capitalize text-center pb-2">
                    Rating:{" "}
                    <span className="font-thin">
                      {gym.rating && gym.rating}
                    </span>
                  </p>

                  {gym.user_id && (
                    <Link to={`/gym-plan/${gym.user_id}`}>
                      <Button text="Book Now" />
                    </Link>
                  )}
                </div>
              </>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllGyms;
