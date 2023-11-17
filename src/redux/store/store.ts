import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { VendorsListApi } from '../api/VendorsListApi';

const rootReducer = combineReducers({
    [VendorsListApi.reducerPath]: VendorsListApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(VendorsListApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
