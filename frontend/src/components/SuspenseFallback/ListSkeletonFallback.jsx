import { Edit as EditIcon } from "@mui/icons-material";
import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Skeleton,
} from "@mui/material";

const ListSkeletonFallback = ({ itemCount }) => {
    return (
        <Box>
            <List>
                {Array.from(new Array(itemCount)).map((_, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={<Skeleton variant="text" width="40%" />}
                            secondary={<Skeleton variant="text" width="80%" />}
                        />
                        <Skeleton variant="circular" width={24} height={24} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ListSkeletonFallback;
