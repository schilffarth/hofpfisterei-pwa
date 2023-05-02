import { createSlice } from '@reduxjs/toolkit';

const getInitialThemeMode = () => {
    const savedThemeMode = localStorage.getItem('themeMode');
    return savedThemeMode || 'light';
};

const initialState = {
    mode: getInitialThemeMode(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light';
            state.mode = newMode;
            localStorage.setItem('themeMode', newMode);
        },
    },
});

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
