import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ColoShopApi } from './Slices/ColoshopSlices'

export const store = configureStore({
  reducer: {
    [ColoShopApi.reducerPath]: ColoShopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ColoShopApi.middleware),
})

setupListeners(store.dispatch)