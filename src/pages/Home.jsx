import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../assets/datas/Images";
import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";
import SearchInpLoc from "../components/filters/SearchInpLoc";
import AllGyms from "../components/AllGyms";

import {
  useGetNearestGymsQuery,
  useGetGymPlacesQuery,
} from "../redux/services/apiFetching";
import IsLoading from "../components/loading/IsLoading";
import IsError from "../components/errors/IsError";
import Cities from "../components/filters/Cities";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [filteredItem, setFilteredItem] = useState([]);

  const getNearestGymInfo = useGetNearestGymsQuery();
  let gymData;
  if (getNearestGymInfo && getNearestGymInfo.status === "fulfilled") {
    gymData = getNearestGymInfo.data.data;
  }

  const getGymPlacesInfo = useGetGymPlacesQuery();
  let gymPlaces;
  if (getGymPlacesInfo && getGymPlacesInfo.status === "fulfilled") {
    gymPlaces = getGymPlacesInfo.data.data;
  }

  if (getNearestGymInfo.isLoading) {
    return <IsLoading />;
  }

  if (getNearestGymInfo.isError) {
    return <IsError />;
  }

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setSearchResults([]);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (searchQuery) {
      let newerArr = [];

      gymData &&
        gymData.map((gym) => {
          let gymName = gym.gym_name;

          let splitted = gymName.split(" ");

          let newStr = [];

          for (let i = 0; i < splitted.length; i++) {
            if (splitted[i].includes(":")) {
              let splitColon = splitted[i].split(":").join("");
              newStr.push(splitColon);
            } else if (splitted[i].includes(",")) {
              let splitColon = splitted[i].split(",").join();
              newStr.push(splitColon);
            } else if (splitted[i].includes(" ")) {
              let splitColon = splitted[i].split(" ").join();
              newStr.push(splitColon);
            } else {
              newStr.push(splitted[i]);
            }
          }

          for (let j = 0; j < newStr.length; j++) {
            if (newStr[j].toLowerCase() === searchQuery.toLowerCase()) {
              newerArr.push(gym);
            }
          }
        });

      if (newerArr.length > 0) {
        setSearchResults([...newerArr]);
      } else {
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  let dropdownOption = gymPlaces && gymPlaces.map((place) => place.city);

  const toggleDropdown = () =>
    searchQuery && searchResults.length === 0 ? setOpen(false) : setOpen(true);

  const handleItemClick = (city) => {
    let gymAddresses = [];
    city && setSelectedItem(city);

    if (searchQuery && searchResults.length !== 0) {
      searchResults.map((gym) => {
        let gymAdd = gym.address2.toLowerCase();

        if (gymAdd.includes(city.toLowerCase())) {
          gymAddresses.push(gym);
        }
      });
    } else {
      gymData &&
        gymData.map((gym) => {
          let gymAdd = gym.address2.toLowerCase();

          if (gymAdd.includes(city.toLowerCase())) {
            gymAddresses.push(gym);
          }
        });
    }

    if (gymAddresses.length > 0) {
      setFilteredItem([...gymAddresses]);
    } else {
      setFilteredItem([]);
    }

    setOpen(false);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center relative">
      <Navbar />

      <div className="w-full h-[600px]">
        <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-auto bg-[#0d0d0d] flex flex-col justify-center items-center mb-20">
        <SearchInput
          searchQuery={searchQuery}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />

        <div className="w-[90%] h-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[20%] h-auto flex flex-col justify-center items-center mb-10 md:mb-0">
            {/* <div className="w-full h-auto my-4">
              <h3 className="mb-6 text-2xl font-semibold dark:text-[#fff] capitalize tracking-wide font-serif">
                Location
              </h3>

              <SearchInpLoc />
            </div> */}

            <div className="w-full h-auto md:mt-16">
              <h3 className="mb-6 text-2xl font-semibold dark:text-[#fff] capitalize tracking-wide font-serif">
                Cities
              </h3>

              <Cities
                items={dropdownOption}
                isOpen={isOpen}
                selectedItem={selectedItem}
                toggleDropdown={toggleDropdown}
                handleItemClick={handleItemClick}
              />
            </div>
          </div>

          <div
            className="w-full md:w-[80%] h-auto flex flex-col justify-center items-end"
            id="dataContainer"
          >
            {!searchQuery && !selectedItem ? (
              <AllGyms gymData={gymData && gymData} />
            ) : (
              <>
                {searchQuery && !selectedItem ? (
                  <AllGyms gymData={searchResults && searchResults} />
                ) : (
                  <>
                    {selectedItem ? (
                      <AllGyms gymData={filteredItem && filteredItem} />
                    ) : (
                      <p className="text-white text-3xl text-center font-serif capitalize">
                        No Data Matched
                      </p>
                    )}
                  </>
                )}
              </>
            )}

            {((searchQuery && searchResults.length === 0 && !selectedItem) ||
              (selectedItem && filteredItem.length === 0)) && (
              <p className="text-white text-3xl text-center font-serif capitalize">
                No Data Matched
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
