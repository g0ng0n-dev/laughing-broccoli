import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a8b69635eamsh32382c27b78d14fp16c30cjsn8622df97d64f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder )=> ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
