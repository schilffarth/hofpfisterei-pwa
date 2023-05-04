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
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import {
    Close as CloseIcon,
    Work as WorkIcon,
    School as SchoolIcon,
    FollowTheSigns as FollowTheSignsIcon,
    Lightbulb as LightbulbIcon,
    ExpandMore as ExpandMoreIcon,
    WbIncandescent as WbIncandescentIcon,
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
                            <Accordion
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    '&.Mui-expanded': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FollowTheSignsIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Karriere
                                        </ListItemText>
                                    </ListItem>
                                </AccordionSummary>
                                <AccordionDetails sx={{padding: '0 3rem 1rem'}}>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <WorkIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Stellenangebote
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <SchoolIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Ausbildung
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <WbIncandescentIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Initiativbewerbung
                                            </Typography>
                                        </Box>
                                    </Link>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    '&.Mui-expanded': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LightbulbIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Infothek
                                        </ListItemText>
                                    </ListItem>
                                </AccordionSummary>
                                <AccordionDetails sx={{padding: '0 3rem 1rem'}}>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <WorkIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Firmenphilosophie
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <SchoolIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Der Weg des Brotes
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Link to="/career" onClick={handleClose} replace>
                                        <Box sx={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary'
                                        }}>
                                            <WbIncandescentIcon fontSize="xs" />
                                            <Typography ml={1}>
                                                Initiativbewerbung
                                            </Typography>
                                        </Box>
                                    </Link>
                                </AccordionDetails>
                            </Accordion>
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