import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '../Link/Link';
import './NavBar.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";

const Navbar = () => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setBurgerMenuOpen(true);
    };

    const handleMenuClose = () => {
        setBurgerMenuOpen(false);
    };

    return (
        <>
            <AppBar id='top-navbar' position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" flexGrow={1}>
                        <Link to="/" className="logo-link">
                            <Avatar alt="Hofpfisterei Logo" src="/Hofpfisterei.png" />
                        </Link>
                    </Typography>
                    <ThemeSwitcher />
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <BurgerMenu open={burgerMenuOpen} onClose={handleMenuClose} />
        </>
    );
};

export default Navbar;
