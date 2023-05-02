import React from 'react';
import { Button, Stack, Typography } from "@mui/material";

const VerticalIconButton = ({
    label,
    icon,
    variant = "outlined",
    color = "inherit",
    ...otherProps
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            {...otherProps}
        >
            <Stack sx={{ padding: '1rem 0' }} direction="column" alignItems="center">
                {icon}
                <Typography
                    variant="overline"
                >
                    {label}
                </Typography>
            </Stack>
        </Button>
    );
};

export default VerticalIconButton;
