import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Box
} from "@mui/material";

import api from "../utils/api/api";
import { showNotification } from "../features/notificationSlice.js";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products').then((res) => {
            console.log(res);
            setProducts(res.data);
        }).catch((e) => {
            dispatch(showNotification({
                type: 'error',
                message: e.response?.data.message,
            }));
        });
    })

    return (
        <Box className="page">
            Proucts
        </Box>
    );
};

export default ProductsPage;
