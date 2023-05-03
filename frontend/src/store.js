import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from "./features/notificationSlice.js";
import backActionSlice from "./features/backActionSlice.js";
import preorderCartSlice from "./features/preorderCartSlice.js";
import themeSlice from './features/themeSlice.js';

// Redux store
const store = configureStore({
    reducer: {
        notification: notificationSlice,
        backAction: backActionSlice,
        preorderCart: preorderCartSlice,
        theme: themeSlice,
    },
});

export default store;
