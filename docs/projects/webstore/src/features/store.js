import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSLice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSLice.reducerPath]: apiSLice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSLice.middleware),
  devTools: true,
});
