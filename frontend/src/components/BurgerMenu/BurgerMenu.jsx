import React from 'react';
import Link from '../Link/Link';
import {
    Box,
    Modal,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Paper,
    Stack,
} from "@mui/material";
import {
    Close as CloseIcon,
    LocationOn as LocationOnIcon,
    ShoppingCart as ShoppingCartIcon,
    Sell as SellIcon,
    FollowTheSigns as FollowTheSignsIcon,
    Lightbulb as LightbulbIcon,
} from '@mui/icons-material';
import './BurgerMenu.css';

const BurgerMenu = ({ open, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Modal
            id="burger-menu"
            open={open}
            onClose={handleClose}
            aria-labelledby="burger-menu"
            aria-describedby="mobile navigation menu"
        >
            <Paper square className="burger-menu">
                <Stack
                    spacing="100%"
                    direction="column"
                >
                    <div className="footer-top">
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                            <IconButton color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List className="link-list">
                            <Link to="/stores" onClick={handleClose} replace>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Filialen
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/products" onClick={handleClose} replace>
                                <ListItem>
                                    <ListItemIcon>
                                        <SellIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Sortiment (Pfister-Brote, Kleingebäck, Feingebäck)
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/preorder" onClick={handleClose} replace>
                                <ListItem>
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Vorbestellen
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/preorder" onClick={handleClose} replace>
                                <ListItem>
                                    <ListItemIcon>
                                        <FollowTheSignsIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Karriere (Stellenangebote, Ausbildung)
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/preorder" onClick={handleClose} replace>
                                <ListItem>
                                    <ListItemIcon>
                                        <LightbulbIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Infothek (...)
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                    <div className="footer-bottom">
                        <Box className="footer-links" sx={{ p: 2 }}>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/about" onClick={handleClose}>
                                    Über uns
                                </Link>
                            </Typography>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/contact" onClick={handleClose}>
                                    Kontakt
                                </Link>
                            </Typography>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/terms-and-conditions" onClick={handleClose}>
                                    Datenschutz
                                </Link>
                            </Typography>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/cookies" onClick={handleClose}>
                                    Cookies
                                </Link>
                            </Typography>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/press" onClick={handleClose}>
                                    Impressum
                                </Link>
                            </Typography>
                            <Typography variant="body2" align="center" color="grey">
                                <Link replace to="/admin/dashboard" onClick={handleClose}>
                                    Admin
                                </Link>
                            </Typography>
                        </Box>
                        <Box className="copyright">
                            <Typography variant="body2" align="center">
                                &copy; {new Date().getFullYear()} Ludwig Stocker Hofpfisterei GmbH
                            </Typography>
                        </Box>
                        <Box className="copyright created-by">
                            <Typography variant="body2" align="center" color="primary">
                                Created and provided by Roland Peter Schilffarth
                            </Typography>
                        </Box>
                    </div>
                </Stack>
            </Paper>
        </Modal>
    );
};

export default BurgerMenu;