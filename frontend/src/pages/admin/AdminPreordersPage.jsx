import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Box,
    IconButton, List, ListItem, ListItemText,

} from "@mui/material";
import {
    Check as CheckIcon,
} from "@mui/icons-material";
import LoadingProgressFallback from "../../components/SuspenseFallback/LoadingProgressFallback.jsx";

import api from "../../utils/api/api.js";
import { showNotification } from "../../features/notificationSlice.js";

const AdminPreordersPage = () => {
    const dispatch = useDispatch();
    const [preorders, setPreorders] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/preorders').then((res) => {
            setPreorders(res.data);
            return api.get('/products');
        }).then((res) => {
            setProducts(res.data);
        }).catch((e) => {
            console.error(e);
            dispatch(showNotification({
                type: 'error',
                message: e.response?.data.message,
            }));
        });
    }, [preorders]);

    if (!preorders.length) {
        return <LoadingProgressFallback />;
    }

    return (
        <Box className="page">
            <List>
                {preorders.map((preorder) => {
                    return (
                        <ListItem
                            key={preorder['_id']}
                        >
                            <Box>

                            </Box>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default AdminPreordersPage;
