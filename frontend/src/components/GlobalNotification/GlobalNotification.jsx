import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Collapse, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { hideNotification } from '../../features/notificationSlice';
import './GlobalNotification.css';
import { randomString } from "../../utils/randomString.js";

const GlobalNotification = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector((state) => state.notification);
    const shouldAutoClose = type !== 'error';

    const [open, setOpen] = useState(false);
    // Unique key for each alert, to force re-render of progress bar
    const [key, setKey] = useState(randomString());

    useEffect(() => {
        if (message) {
            setOpen(true);
            setKey(randomString());
        }
    }, [message]);

    const handleClose = () => {
        setOpen(false);
    };

    // Auto close logic
    useEffect(() => {
        if (message && shouldAutoClose) {
            const timer = setTimeout(() => {
                handleClose();
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [message, shouldAutoClose, handleClose]);

    return (
        <Collapse
            in={open}
            onExited={() => {
                dispatch(hideNotification());
            }}
        >
            <Alert
                id="global-notification"
                key={key}
                severity={type}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                <Typography variant="body2">{message}</Typography>
                {shouldAutoClose && (
                    <div className={`progress-bar progressBar-${type}`} />
                )}
            </Alert>
        </Collapse>
    );
};

export default GlobalNotification;
