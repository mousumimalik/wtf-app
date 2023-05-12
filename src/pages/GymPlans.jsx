import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetNearestGymsQuery,
  useGetGymPlanQuery,
} from "../redux/services/apiFetching";
import { Logo } from "../assets/datas/Images";
import { TbDatabase } from "react-icons/tb";
import { MdVaccines } from "react-icons/md";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiStarFlag } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";
import { SiTestinglibrary } from "react-icons/si";
import IsLoading from "../components/loading/IsLoading";
import IsError from "../components/errors/IsError";

function GymPlans() {
  const { id } = useParams();
  const gymPlanResInfo = useGetGymPlanQuery(id);
  const getNearestGymInfo = useGetNearestGymsQuery();

  let gymPlanData, gymPlanDataData, gymPlanMsg;
  if (gymPlanResInfo && gymPlanResInfo.status === "fulfilled") {
    gymPlanData = gymPlanResInfo.data;
    gymPlanDataData = gymPlanResInfo.data.data;

    if (gymPlanData.message) {
      gymPlanMsg = gymPlanData.message;
    }
  }

  let gymData, gymTerms;
  if (getNearestGymInfo && getNearestGymInfo.status === "fulfilled") {
    gymData = getNearestGymInfo.data.data;
    gymTerms = getNearestGymInfo.data.terms;
  }

  if (getNearestGymInfo.isLoading || gymPlanResInfo.isLoading) {
    return <IsLoading />;
  }

  if (getNearestGymInfo.isError || gymPlanResInfo.isLoading) {
    return <IsError />;
  }

  function generateRandomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  const termIcons = {
    1: <TbDatabase className="w-full h-full text-white" />,
    2: <MdVaccines className="w-full h-full text-white" />,
    3: <BsFillHeartPulseFill className="w-full h-full text-white" />,
    4: <FaMoneyBillAlt className="w-full h-full text-white" />,
    5: <GiStarFlag className="w-full h-full text-white" />,
    6: <GoSmiley className="w-full h-full text-white" />,
    7: <SiTestinglibrary className="w-full h-full text-white" />,
  };

  console.log("termIcons====>", termIcons && termIcons.term1);

  let descData, benifitsData;

  gymData &&
    gymData.map((data, index) => {
      if (data.user_id === id) {
        let { description, benefits } = data;
        descData = description;
        benifitsData = [...benefits];
      }

      return data;
    });

  return (
    <>
      {gymPlanMsg ? (
        <div className="w-full h-[300px] my-10 flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold dark:text-[#fff] capitalize tracking-wide font-serif">
            {gymPlanMsg}
          </h3>
        </div>
      ) : (
        <div className="w-full h-auto flex flex-col md:flex-row justify-center items-start bg-transparent my-24">
          <div className="w-full md:w-[50%] p-10 flex flex-col justify-center items-center bg-transparent">
            <div className="w-full flex flex-col justify-start items-center md:items-start  mb-10">
              <h3 className="text-white text-2xl text-start font-serif capitalize mb-3">
                Description
              </h3>
              <p className="text-white text-md text-start font-serif capitalize">
                {descData && descData}
              </p>
            </div>

            <div className="w-full flex flex-col justify-start items-center md:items-start mb-10">
              <h3 className="text-white text-2xl text-start font-serif capitalize mb-3">
                Facilities
              </h3>
              <div className="w-full flex flex-wrap justify-between items-center md:items-start">
                {benifitsData &&
                  benifitsData.map((facility) => (
                    <p className="text-white text-md text-start font-serif capitalize">
                      {facility.name ? facility.name : "No Data"}
                    </p>
                  ))}
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-center md:items-start">
              <h3 className="text-white text-2xl text-start font-serif capitalize mb-4">
                Why Choose WTF?
              </h3>

              <div className="w-full flex flex-wrap justify-center md:justify-start items-center md:items-start gap-2">
                {gymTerms &&
                  gymTerms.map((terms, index) => (
                    <>
                      {terms.name && (
                        <div
                          className="w-[100px] h-[80px] bg-[#ED2B2A] flex flex-col justify-center items-center"
                          key={index}
                        >
                          {/* <img
                        src={terms.icon && terms.icon}
                        alt={terms.id && terms.id}
                        className="w-[50px] h-[40px] object-contain mb-3"
                      /> */}
                          <div className="w-[50px] h-[40px] mb-3">
                            {termIcons[index]}
                          </div>

                          <p className="text-white text-sm text-start font-serif capitalize">
                            {terms.name}
                          </p>
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] p-3 md:p-10 md:m-6 flex flex-col justify-center items-center bg-[#393646] rounded-lg">
            <h2 className="text-white text-3xl text-center font-serif capitalize mb-6">
              Choose Membership
            </h2>

            {gymPlanDataData &&
              gymPlanDataData.map((plan, index) => (
                <div
                  className="w-full h-auto p-5 rounded-sm mb-6 flex justify-between items-center hover:animate-pulse cursor-pointer"
                  style={{ backgroundColor: generateRandomColor() }}
                  key={plan.id}
                >
                  <div className="bg-transparent flex flex-col justify-start items-start">
                    <p className="text-white text-md text-start font-serif capitalize mb-2">
                      Plan {index}
                    </p>

                    <div className="flex justify-start items-center bg-transparent">
                      <img
                        src={Logo}
                        alt={plan.plan_name && plan.plan_name}
                        className="w-[50px] h-[25px] object-contain"
                      />
                      {plan.plan_name && (
                        <p className="text-white text-md text-center font-serif capitalize mt-3">
                          {plan.plan_name}
                        </p>
                      )}
                    </div>

                    <p className="text-white text-md text-start font-serif capitalize">
                      {plan.description && plan.description}
                    </p>
                  </div>
                  <div className="bg-transparent flex flex-col justify-end items-center">
                    <p className="text-white text-md text-center font-serif capitalize">
                      ${plan.plan_price && plan.plan_price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GymPlans;
