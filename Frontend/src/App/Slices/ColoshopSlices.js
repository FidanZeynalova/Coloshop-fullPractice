import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ColoShopApi = createApi({
    reducerPath: 'coloshop',
    baseQuery: fetchBaseQuery({ baseUrl: 'http:localhost:3030/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `coloshop`
        }),
        getProductById: builder.query({
            query: (id) => `coloshop/${id}`
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                URL:`coloshop/${id}`,
                method:"DELETE"
            })
        }),
        postProduct:builder.mutation({
            query:(newProduct)=>({
                method:"POST",
                body:newProduct,
                headers:{
                    "Accept":"application/json",    
                    "Content-type":"application/json"
                }
            })
        })
    }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useDeleteProductMutation,usePostProductMutation } = ColoShopApi