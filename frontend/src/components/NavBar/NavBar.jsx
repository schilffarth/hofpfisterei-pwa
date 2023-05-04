import * as PropTypes from "prop-types";
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Tabs,
    Tab,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Report as ReportIcon,
} from "@mui/icons-material";

import Link from '../Link/Link';
import './NavBar.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";

const Navbar = () => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [disclaimerOpen, setDisclaimerOpen] = useState(true);

    const handleMenuClick = () => {
        setBurgerMenuOpen(true);
    };

    const handleMenuClose = () => {
        setBurgerMenuOpen(false);
    };

    const handleDisclaimerClick = () => {
        setDisclaimerOpen(true);
    };

    const handleDisclaimerClose = () => {
        setDisclaimerOpen(false);
    };

    return (
        <>
            <AppBar id='top-navbar' position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        <Link to="/" className="logo-link">
                            <Avatar alt="Hofpfisterei Logo" src="/Hofpfisterei.png" />
                        </Link>
                    </Typography>
                    <Box sx={{margin: 'auto'}}>
                        <Button
                            startIcon={<ReportIcon color="error" />}
                            endIcon={<ReportIcon color="error" />}
                            onClick={handleDisclaimerClick}
                        >
                            <Typography color="error">
                                DISCLAIMER
                            </Typography>
                        </Button>
                    </Box>
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
            <BurgerMenu
                open={burgerMenuOpen}
                onClose={handleMenuClose}
            />
            <DisclaimerDialog
                open={disclaimerOpen}
                handleClose={handleDisclaimerClose}
            />
        </>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const DisclaimerDialog = ({
    open,
    handleClose,
}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="language tabs">
                    <Tab label="English" id="tab-english" />
                    <Tab label="Deutsch" id="tab-deutsch" autoFocus/>
                </Tabs>
                <IconButton onClick={handleClose} >
                    <CloseIcon />
                </IconButton>
            </Box>
            <TabPanel value={value} index={0}>
                <DialogTitle id="alert-dialog-title">
                    DISCLAIMER
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        The content and information provided on this website are intended for informational and educational purposes only and are not affiliated with, endorsed by, or sponsored by Company X or any of its subsidiaries, affiliates, or partners. The views and opinions expressed on this website are solely those of the website owner and contributors and do not represent the views or opinions of Company X.
                        <br/><br/>
                        All information on this website is provided "as is" without any warranties of any kind, express or implied. The website owner and contributors make no representations or warranties as to the accuracy, completeness, timeliness, or suitability of any information provided on this website.
                        <br/><br/>
                        In no event shall the website owner or contributors be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of or in connection with the use of this website or any information provided on this website.
                        <br/><br/>
                        All content on this website, including text, graphics, logos, icons, and software, is the property of the website owner, its content suppliers, or has been sourced from publicly available resources such as Google Images. Some images may be subject to copyright and are used for illustrative purposes only. The reproduction, modification, distribution, transmission, or display of any content from this website without the prior written consent of the respective copyright owner or the website owner is strictly prohibited.
                        <br/><br/>
                        By using this website, you agree to be bound by the terms of this disclaimer. If you do not agree to these terms, please do not use this website. The website owner reserves the right to modify or amend this disclaimer at any time without notice. It is the responsibility of the user to review this disclaimer periodically for changes.
                        <br/><br/>
                        Contact:<br/>
                        Roland Peter Schilffarth<br/>
                        roland.schilffarth@gmail.com<br/>
                        +49 162 721 7258
                    </DialogContentText>
                </DialogContent>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DialogTitle id="alert-dialog-title">
                    HAFTUNGSAUSSCHLUSS
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Die auf dieser Website bereitgestellten Inhalte und Informationen dienen ausschließlich Informations- und Bildungszwecken und sind nicht mit Company X oder einem ihrer Tochterunternehmen, verbundenen Unternehmen oder Partner verbunden, von ihnen unterstützt oder gesponsert. Die auf dieser Website geäußerten Ansichten und Meinungen sind ausschließlich die des Website-Besitzers und der Mitwirkenden und stellen nicht die Ansichten oder Meinungen von Company X dar.
                        <br/><br/>
                        Alle Informationen auf dieser Website werden "wie besehen" ohne jegliche Gewährleistung jeglicher Art, ausdrücklich oder stillschweigend, zur Verfügung gestellt. Der Website-Besitzer und die Mitwirkenden geben keine Zusicherungen oder Gewährleistungen hinsichtlich der Richtigkeit, Vollständigkeit, Aktualität oder Eignung der auf dieser Website bereitgestellten Informationen.
                        <br/><br/>
                        In keinem Fall haften der Website-Besitzer oder die Mitwirkenden für Schäden, einschließlich, aber nicht beschränkt auf direkte, indirekte, zufällige, Folge- oder Strafschäden, die aus oder im Zusammenhang mit der Nutzung dieser Website oder der auf dieser Website bereitgestellten Informationen entstehen.
                        <br/><br/>
                        Sämtliche Inhalte dieser Website, einschließlich Texte, Grafiken, Logos, Symbole und Software, sind Eigentum des Website-Besitzers, seiner Inhaltsanbieter oder stammen aus öffentlich zugänglichen Quellen wie Google Images. Einige Bilder können urheberrechtlich geschützt sein und dienen lediglich Illustrationszwecken. Die Reproduktion, Modifikation, Verbreitung, Übermittlung oder Anzeige von Inhalten dieser Website ohne vorherige schriftliche Zustimmung des jeweiligen Urheberrechtsinhabers oder des Website-Besitzers ist strengstens untersagt.
                        <br/><br/>
                        Durch die Nutzung dieser Website erklären Sie sich mit den Bedingungen dieses Haftungsausschlusses einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie diese Website bitte nicht. Der Website-Besitzer behält sich das Recht vor, diesen Haftungsausschluss jederzeit ohne Vorankündigung zu ändern oder zu ergänzen. Es liegt in der Verantwortung des Benutzers, diesen Haftungsausschluss regelmäßig auf Änderungen zu überprüfen.
                        <br/><br/>
                        Kontakt:<br/>
                        Roland Peter Schilffarth<br/>
                        roland.schilffarth@gmail.com<br/>
                        +49 162 721 7258
                    </DialogContentText>
                </DialogContent>
            </TabPanel>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default Navbar;
