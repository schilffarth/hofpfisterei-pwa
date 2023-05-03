import {
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material";
import {
    Home as HomeIcon,
    LocationOn as LocationOnIcon,
    Sell as SellIcon,
    ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

import useNavigate from "../Link/useNavigate";

const BottomNavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <BottomNavigation
                id='bottom-navbar'
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                    zIndex: '3',
                }}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    onClick={() => navigate('/home')}
                />
                <BottomNavigationAction
                    key="products"
                    label="Sortiment"
                    icon={<SellIcon />}
                    onClick={() => navigate('/products')}
                />
                <BottomNavigationAction
                    key="stores"
                    label="Filialen"
                    icon={<LocationOnIcon />}
                    onClick={() => navigate('/stores')}
                />
                <BottomNavigationAction
                    key="preorder"
                    label="Vorbestellen"
                    icon={<ShoppingCartIcon />}
                    onClick={() => navigate('/preorder')}
                />
            </BottomNavigation>
        </>
    );
};

export default BottomNavBar;
