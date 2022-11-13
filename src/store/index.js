import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './Auth.js';

const store = configureStore({
    reducer: {
        authToken: tokenReducer,
    },
});

export default store;