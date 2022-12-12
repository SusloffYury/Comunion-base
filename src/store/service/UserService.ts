import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers } from '../models/IUsers';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUsers[], number>({
      query: (limit: number = 5) => ({
        url: '/users',
        params: { _limit: limit },
      }),
    }),
  }),
});
