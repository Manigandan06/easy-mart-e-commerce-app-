import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => `foods`,
    }),

    getFoodByID: builder.query({
      query: (id) => `foods/${id}`,
    }),

    createFood: builder.mutation({
      query: (food) => ({
        url: "foods",
        method: "POST",
        body: food,
      }),
    }),

    updateFood: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `foods/${id}`,
        method: "PUT",
        body: updates,
      }),
    }),

    deleteFood: builder.mutation({
      query: (id) => ({
        url: `foods/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFoodsQuery,
  useGetFoodByIDQuery,
  useCreateFoodMutation,
  useUpdateFoodMutation,
  useDeleteFoodMutation,
} = foodApi;
