import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import {
    Close as CloseIcon
} from '@mui/icons-material';

import './ConfirmationPopup.css';

const ConfirmationPopup = ({
    // Popup title
    title,
    // Popup description
    description,
    /**
     * Trigger onConfirm() callback upon confirming the popup
     *
     * Callback arguments
     * handleClose: Callback to close the popup
     * setMessage: Callback to render a message in the popup
     * inputValue: Value of the TextField, if one was rendered
     */
    onConfirm,
    // Trigger onClose() callback upon closing the popup
    onClose = () => null,
    // Details to display in a <code> Typography
    details = '',
    // Whether to render a TextField
    displayInput = false,
    // The label for the rendered TextField
    inputLabel = 'Label',
    // Override confirm button text
    confirmButtonText = 'Confirm',
    // Add an icon to the confirm button
    confirmButtonIcon = null,
}) => {
    const [open, setOpen] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleClose = () => {
        onClose();
        setOpen(false);
    };

    const handleConfirm = () => {
        onConfirm(handleClose, setMessage, inputValue);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <Dialog
            id="confirmation-popup"
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {title}
                <IconButton
                    color="inherit"
                    onClick={handleClose}
                    className="confirmation-popup-close-button"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className="confirmation-popup-dialog-content">
                <Typography variant="body1">{description}</Typography>
                {details && <Typography variant="code">{details}</Typography>}
                {message && <Typography color="error" variant="body1">{message}</Typography>}
                {displayInput && (
                    <TextField
                        label={inputLabel}
                        variant="filled"
                        value={inputValue}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                    />
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirm}
                    className="confirmation-popup-confirm-button"
                    startIcon={confirmButtonIcon}
                >
                    {confirmButtonText}
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmationPopup;
