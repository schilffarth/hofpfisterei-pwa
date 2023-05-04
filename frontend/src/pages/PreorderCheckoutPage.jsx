import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Typography,
    TextField,
    Stepper,
    Step,
    StepLabel,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    LocationOn as LocationOnIcon,
    Person as PersonIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    AccessTimeFilled as AccessTimeFilledIcon,
    Done as DoneIcon,
} from "@mui/icons-material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { setStore, clearPreorderCart } from "../features/preorderCartSlice.js";

import { displayFraction } from "../utils/quantityHandlers.js";
import useNavigate from "../components/Link/useNavigate";
import { showNotification } from "../features/notificationSlice.js";

const steps = ['Kontaktdaten', 'Übersicht', 'Vorbestellung'];

const PreorderCheckoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        pickup: null,
    });
    const cartItems = useSelector((state) => state.preorderCart.items);
    const storeAddress = useSelector((state) => state.preorderCart.store);

    useEffect(() => {
        if (activeStep !== steps.length -1) {
            let message = '';

            if (!cartItems.length && !storeAddress) {
                message = "Bitte wählen Sie mindestens ein Produkt und eine Filiale für Ihre Vorbestellung aus.";
            } else if (!cartItems.length) {
                message = "Bitte wählen Sie mindestens ein Produkt für Ihre Vorbestellung aus.";
            } else if (!storeAddress) {
                message = "Bitte wählen Sie für die Abholung Ihrer Vorbestellung eine Filiale aus.";
            }

            if (message) {
                dispatch(showNotification({
                    type: 'error',
                    message,
                }));

                return navigate("/preorder");
            }
        }
    }, [activeStep, cartItems, storeAddress]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleDateChange = (date) => {
        setUserInfo({ ...userInfo, pickup: date });
    };

    const handleNext = () => {
        if (activeStep === 0) {
            const { name, email, phone, pickup } = userInfo;

            if (!name || !email || !phone || !pickup) {
                dispatch(showNotification({
                    type: 'error',
                    message: 'Bitte füllen Sie alle Felder aus.',
                }));

                return;
            }
        } else if (activeStep === 1) {
            dispatch(setStore(''));
            dispatch(clearPreorderCart());
        }

        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box sx={{paddingTop: 2}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Abholzeit"
                                value={userInfo.pickup}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                                disablePast
                            />
                        </LocalizationProvider>
                        <TextField
                            variant="filled"
                            label="Name"
                            name="name"
                            value={userInfo.name}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                        />
                        <TextField
                            variant="filled"
                            label="E-Mail-Adresse"
                            name="email"
                            type="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            variant="filled"
                            label="Telefon- / Handynummer"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                    </Box>
                );
            case 1:
                return (
                    <Box>
                        {cartItems.map((item, index) => (
                            <Box key={index}>
                                <Box
                                    key={item.productId}
                                    sx={{
                                        marginBottom: 2,
                                        marginTop: 2,
                                    }}
                                >
                                    <Typography variant="subtitle1">{item.name}</Typography>
                                    <Typography variant="body2">
                                        {`Menge: ${displayFraction(item.quantity)}`}
                                    </Typography>
                                    {item.comment && (
                                        <Typography variant="body2">
                                            {item.comment}
                                        </Typography>
                                    )}

                                </Box>
                                <Divider />
                            </Box>
                        ))}
                        <Box mt={2}>
                            <List dense>
                                <ListItem key="store">
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Filiale"
                                        secondary={storeAddress}
                                    />
                                </ListItem>
                                <ListItem key="pickup">
                                    <ListItemIcon>
                                        <AccessTimeFilledIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Abholzeit"
                                        secondary={userInfo.pickup.toLocaleString()}
                                    />
                                </ListItem>
                                <ListItem key="name">
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Name"
                                        secondary={userInfo.name}
                                    />
                                </ListItem>
                                <ListItem key="email">
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="E-Mail"
                                        secondary={userInfo.email}
                                    />
                                </ListItem>
                                <ListItem key="phone">
                                    <ListItemIcon>
                                        <PhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Telefon- / Handynummer"
                                        secondary={userInfo.phone}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                );
            case 2:
                return (
                    <Box>
                        <Box sx={{
                            width: '100%',
                            textAlign: 'center',
                            marginBottom: '2rem',
                        }}>
                            <DoneIcon color="success" sx={{ fontSize: '4rem' }}/>
                            <br/>
                            <Typography variant="h6" color="success.main">
                                Wir haben Ihre Vorbestellung erhalten!
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            Ihre Vorbestellung wird nun bearbeitet.
                            Sie erhalten eine E-Mail und SMS,
                            sobald Ihre Vorbestellung bestätigt wurde.
                            Bei Nachfragen werden wir versuchen,
                            Sie telefonisch zu kontaktieren.
                        </Typography>
                    </Box>
                );
            default:
                return 'Unknown Step';
        }
    };

    return (
        <Box className="page" sx={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: 3 }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
                Vorbestellung abschließen
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ marginTop: 2 }}>
                {getStepContent(activeStep)}
            </Box>
            {activeStep !== steps.length - 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        Zurück
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 2 ? 'Abschließen' : 'Weiter'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default PreorderCheckoutPage;
