import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useNavigate from "../Link/useNavigate";
import {
    BottomNavigation,
    BottomNavigationAction,
    Menu,
    MenuItem,
    ListItemIcon,
    Typography
} from "@mui/material";
import {
    Home as HomeIcon,
    Login as LoginIcon,
    Settings as SettingsIcon,
    AccountCircle as AccountCircleIcon,
    Subscriptions as SubscriptionsIcon,
    Logout as LogoutIcon, AppRegistration, AutoAwesomeMotion,
} from "@mui/icons-material";

const BottomNavBar = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setValue(value); // The Avatar icon never gets highlighted as of the current BottomNavBar design
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        handleClose();
        navigate('/login');
    };

    return (
        <>
            <BottomNavigation
                id='bottom-navbar'
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                }}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    onClick={() => navigate('/home')}
                />
                    <BottomNavigationAction
                        key="products"
                        label="Products"
                        icon={<SubscriptionsIcon />}
                        onClick={() => navigate('/products')}
                    />
                    <BottomNavigationAction
                        key="register"
                        label="Login"
                        icon={<AppRegistration />}
                        onClick={() => navigate('/register')}
                    />
                <BottomNavigationAction
                    key="login"
                    label="Login"
                    icon={<LoginIcon />}
                    onClick={() => navigate('/login')}
                />
            </BottomNavigation>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => navigate('/settings')}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <Typography variant="body1">
                        Settings
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate('/subscription')}>
                    <ListItemIcon>
                        <SubscriptionsIcon />
                    </ListItemIcon>
                    <Typography variant="body1">
                        Subscription
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutIcon color="error" />
                    </ListItemIcon>
                    <Typography variant="body1" color="error">
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default BottomNavBar;
