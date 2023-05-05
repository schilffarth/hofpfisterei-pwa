import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    Typography,
} from "@mui/material";
import {
    ManageAccounts as ManageAccountsIcon,
    Description as DescriptionIcon,
    DynamicFeed as DynamicFeedIcon,
} from '@mui/icons-material';

import Link from '../../components/Link/Link';

const AdminDashboardPage = () => {
    return (
        <Box className="page">
            <Typography variant="h4">
                Admin Dashboard
            </Typography>
            <List>
                <Link to="../users">
                    <ListItem>
                        <ListItemIcon>
                            <ManageAccountsIcon fontSize="large" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Users"
                            secondary="soon™"
                            primaryTypographyProps={{color: "secondary"}}
                        />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="../preorders">
                    <ListItem>
                        <ListItemIcon>
                            <DynamicFeedIcon fontSize="large" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Vorbestellungen"
                            secondary="Alle Vorbestellungen einsehen"
                            primaryTypographyProps={{color: "secondary"}}
                        />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="../assortment">
                    <ListItem>
                        <ListItemIcon>
                            <DescriptionIcon fontSize="large" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Sortiment"
                            secondary="Gesamtes Sortiment konfigurieren"
                            primaryTypographyProps={{color: "secondary"}}
                        />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );
};

export default AdminDashboardPage;
