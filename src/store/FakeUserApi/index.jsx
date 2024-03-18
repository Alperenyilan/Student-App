import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const UsersApi = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63237a735c1b435727969e61.mockapi.io/",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => ({
          url: "users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
        onError: (error) => {
          console.error("fetchUsers error:", error);
        },
      }),

      addUser: builder.mutation({
        query: (newUser) => ({
          url: "users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: newUser,
        }),
        onError: (error) => {
          console.error("addUser error:", error);
          alert("Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
        },
      }),

      updateUser: builder.mutation({
        query: ({ id, isLoggedIn }) => ({
          url: `users/${id}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: { isLoggedIn: isLoggedIn },
        }),

        onMutate: ({ id, isLoggedIn }) => {
          return { id, isLoggedIn };
        },
      }),
    };
  },
});

export { UsersApi };
export const { useFetchUsersQuery, useAddUserMutation, useUpdateUserMutation } =
  UsersApi;
