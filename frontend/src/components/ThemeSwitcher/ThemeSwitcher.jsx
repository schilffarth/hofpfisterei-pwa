import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { toggleThemeMode } from "../../features/themeSlice";

const ThemeSwitcher = () => {
    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleThemeMode());
    };

    return (
        <IconButton color="inherit" onClick={handleThemeToggle}>
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
    );
};

export default ThemeSwitcher;
