import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const customizedBaseQuery = fetchBaseQuery({
    baseUrl: 'https://snappfood.ir/mobile/v3/',

    //// If our request needs headers, we will configure it here, for example, accessToken

    // prepareHeaders: (headers, { getState }) => {
    //     headers.set('authorization', `Bearer ${accessToken}`);
    //     return headers;
    // },
});
