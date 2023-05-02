import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from "./features/notificationSlice.js";
import backActionSlice from "./features/backActionSlice.js";
import themeSlice from './features/themeSlice.js';
import api from './utils/api/api.js';

// Redux store
const store = configureStore({
    reducer: {
        notification: notificationSlice,
        backAction: backActionSlice,
        theme: themeSlice,
    },
});

export default store;
