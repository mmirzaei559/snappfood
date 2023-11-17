import { createApi } from '@reduxjs/toolkit/query/react';
import { customizedBaseQuery } from './ConfigureStore';

const VENDORS_TAG = 'Vendors';

export const VendorsListApi = createApi({
    reducerPath: 'VendorsListApi',
    baseQuery: customizedBaseQuery,
    tagTypes: [VENDORS_TAG],
    endpoints: (builder) => ({
        getVendorsList: builder.query<IVendorsList, number | any>({
            query: (page) => ({
                url: 'restaurant/vendors-list',
                method: 'GET',
                params: {
                    page,
                    lat: 35.754,
                    long: 51.328,
                    page_size: 10,
                },
            }),
            serializeQueryArgs: ({ endpointName }: { endpointName: string }) => {
                return endpointName;
            },
            merge: (currentCache, newValue, { arg: { page } }) => {
                if (page === 0) return;
                currentCache.data.finalResult.push(...newValue.data.finalResult);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useGetVendorsListQuery } = VendorsListApi;
