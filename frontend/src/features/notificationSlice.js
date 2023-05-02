/**
 * Push a global notification:
 *
 * import { useDispatch } from 'react-redux';
 * import { showNotification } from '../../features/notificationSlice';
 *
 * const dispatch = useDispatch();
 *
 * dispatch(showNotification({
 *     type: 'type',
 *     message: 'Your message.'
 * }));
 */



import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: null,
        type: 'info',
    },
    reducers: {
        showNotification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type || 'info';
        },
        hideNotification: (state) => {
            state.message = null;
            state.type = 'info';
        },
    },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
