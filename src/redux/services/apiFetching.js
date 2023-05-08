import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gymApi = createApi({
  reducerPath: "gymApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://devapi.wtfup.me/",
  }),
  endpoints: (builder) => ({
    getGymPlaces: builder.query({
      query: () => ({
        url: "gym/places",
        method: "GET",
      }),
    }),
    getNearestGyms: builder.query({
      query: (lat, lng) => ({
        url: `gym/nearestgym?lat=${lat}&long=${lng}`,
        method: "GET",
      }),
    }),
    getGymPlans: builder.mutation({
      query: (userId) => {
        console.log("USER ID=>", userId);

        return {
          url: "gym/plan",
          method: "POST",
          body: userId,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const { useGetGymPlacesQuery, useGetNearestGymsQuery, getGymPlans } =
  gymApi;
