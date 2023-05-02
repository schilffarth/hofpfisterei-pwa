import React from 'react';
import {
    Box,
    CircularProgress
} from '@mui/material';

const LoadingProgressFallback = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            mt={5}
        >
            <CircularProgress />
            <p>Loading...</p>
        </Box>
    );
};

export default LoadingProgressFallback;
