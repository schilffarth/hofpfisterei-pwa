import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"; // important: Do not use custom hook
import { IconButton, Avatar } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { popBackAction } from '../../features/backActionSlice';
import './FloatingBackButton.css';

const FloatingBackButton = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const backActions = useSelector((state) => state.backAction.actions);

    const handleBack = () => {
        if (backActions.length > 0) {
            const lastAction = backActions[backActions.length - 1];
            if (lastAction.type === 'location') {
                navigate(lastAction.value, { replace: true });
            } else if (lastAction.type === 'custom') {
                switch (lastAction.value.action) {
                    // todo Custom back actions
                }
                // Handle custom back action here
                // e.g. step back in the stepper component
                // dispatch(pushBackAction({
                //     type: 'custom',
                //     value: 'your_custom_identifier'
                // }));
            }
            dispatch(popBackAction());
        } else {
            // This causes the user to literally exit the app lol
            // navigate(-1);
        }
    };

    return (
        <IconButton
            id='floating-back-button'
            onClick={handleBack}
        >
            <Avatar sx={{ bgcolor: 'rgb(0, 0, 0, 0.2)' }}>
                <ArrowBackIcon color="primary" />
            </Avatar>
        </IconButton>
    );
};

export default FloatingBackButton;
