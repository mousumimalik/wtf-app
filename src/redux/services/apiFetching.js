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
    getGymPlan: builder.query({
      query: (userId) => ({
        url: "gym/plan",
        method: "POST",
        body: {
          "gym_id": userId,
        },
      }),
    }),
  }),
});

export const {
  useGetGymPlacesQuery,
  useGetNearestGymsQuery,
  useGetGymPlanQuery,
} = gymApi;
