import { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    BottomNavigation,
    BottomNavigationAction,
    Menu,
    MenuItem,
    IconButton,
    Typography,
    Box,
    ListItemText,
    TextField,
    Button,
    Stack,
    Badge,
} from "@mui/material";
import {
    Home as HomeIcon,
    LocationOn as LocationOnIcon,
    Sell as SellIcon,
    ShoppingCart as ShoppingCartIcon,
    Remove as RemoveIcon,
    Add as AddIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    East as EastIcon,
} from "@mui/icons-material";

import { displayFraction } from "../../utils/quantityHandlers.js";
import useNavigate from "../Link/useNavigate";
import { addItem, removeItem, updateComment } from "../../features/preorderCartSlice.js";

const BottomNavBar = () => {
    const navigate = useNavigate();
    const preorderCart = useSelector((state) => state.preorderCart.items);
    const [menuOpen, setMenuOpen] = useState(false);
    const cartRef = useRef(null);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

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
                    label="Vorbestellen"
                    icon={<SellIcon />}
                    onClick={() => navigate('/preorder')}
                />
                <BottomNavigationAction
                    key="stores"
                    label="Filialen"
                    icon={<LocationOnIcon />}
                    onClick={() => navigate('/stores')}
                />
                <BottomNavigationAction
                    key="preorderCart"
                    label="Aktuelle Vorbestellung"
                    icon={preorderCart.length ? (
                        <Badge
                            badgeContent={preorderCart.length}
                            color="primary"
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    ) : (
                        <ShoppingCartIcon />
                    )}
                    onClick={handleMenuOpen}
                    ref={cartRef}
                />
            </BottomNavigation>
            <PreorderCartMenu
                preorderCart={preorderCart}
                setMenuOpen={setMenuOpen}
                cartRef={cartRef}
                menuOpen={menuOpen}
            />
        </>
    );
};

const PreorderCartMenu = ({
    preorderCart,
    menuOpen,
    setMenuOpen,
    cartRef,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleIncrease = (product) => {
        dispatch(addItem({
            ...product,
            comment: '',
            quantity: '0.25',
        }));
    };

    const handleDecrease = (product) => {
        dispatch(addItem({
            ...product,
            comment: '',
            quantity: '-0.25',
        }));
    };

    const handleDelete = (product) => {
        dispatch(removeItem(product.productId));
    };

    const handleEdit = (product) => {
        if (edit === product.productId) {
            setEdit(null);
            setEditValue('');
        } else {
            setEdit(product.productId);
            setEditValue(product.comment);
        }
    };

    const handleCommentChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleCommentSave = (item) => {
        dispatch(updateComment({
            productId: item.productId,
            comment: editValue
        }));

        // Close active edit view
        handleEdit(item);
    };

    return (
        <Menu
            anchorEl={cartRef.current}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            {preorderCart.length ? preorderCart.map((item, index) => (
                <MenuItem key={index} sx={{ padding: '1rem', minWidth: '300px' }}>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton onClick={() => handleEdit(item)} size="small">
                                <EditIcon fontSize="small" />
                            </IconButton>
                            {edit === item.productId ? (
                                <Stack>
                                    <ListItemText primary={item.name} />
                                    <TextField
                                        autoFocus
                                        variant="filled"
                                        label="Kommentar"
                                        value={editValue}
                                        onChange={handleCommentChange}
                                    />
                                </Stack>
                            ) : (
                                <ListItemText
                                    primary={item.name}
                                    secondary={item.comment}
                                />
                            )}
                        </Box>
                        <Box sx={{display: 'flex', width: '100%' }}>
                            <IconButton onClick={() => handleDelete(item)} aria-label="Increase quantity" size="small">
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                            <IconButton onClick={() => handleDecrease(item)} aria-label="Decrease quantity" size="small">
                                <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography variant="body1" sx={{
                                margin: 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                            }}>
                                {displayFraction(item.quantity)}
                            </Typography>
                            <IconButton onClick={() => handleIncrease(item)} aria-label="Increase quantity" size="small">
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Box>
                        {edit === item.productId && (
                            <Box mt="1rem">
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={() => handleCommentSave(item)}
                                >
                                    Speichern
                                </Button>
                            </Box>
                        )}
                    </Box>
                </MenuItem>
            )) : (
                <Box sx={{ padding: '1rem 3rem' }}>
                    Keine Produkte
                </Box>
            )}
            <Box sx={{ padding: '1rem'}}>
                <Button
                    fullWidth
                    variant="contained"
                    endIcon={<EastIcon />}
                    onClick={() => navigate("/preorder-checkout")}
                >
                    Vorbestellen
                </Button>
            </Box>
        </Menu>
    );
};

export default BottomNavBar;
