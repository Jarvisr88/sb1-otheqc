import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
    // Add more endpoints as needed
  }),
})

export const { useGetUsersQuery } = api