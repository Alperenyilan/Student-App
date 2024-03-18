import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApplicationsApi = createApi({
  reducerPath: "Applications",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63237a735c1b435727969e61.mockapi.io/",
  }),
  endpoints(builder) {
    return {
      fetchApplications: builder.query({
        query: () => ({
          url: "students",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
        onError: (error) => {
          console.error("fetchApplications error:", error);
          // Hata mesajı
          alert("Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
        },
      }),
    };
  },
});

export { ApplicationsApi };
export const { useFetchApplicationsQuery } = ApplicationsApi;
