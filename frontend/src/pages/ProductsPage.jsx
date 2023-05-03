import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Box
} from "@mui/material";
import LoadingProgressFallback from "../components/SuspenseFallback/LoadingProgressFallback.jsx";

import api from "../utils/api/api";
import { showNotification } from "../features/notificationSlice.js";
import ProductList from "../components/ProductList/ProductList";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/products').then((res) => {
            setProducts(res.data);
        }).catch((e) => {
            dispatch(showNotification({
                type: 'error',
                message: e.response?.data.message,
            }));
        }).finally(() => {
            setLoading(false);
        });
    }, [setProducts]);

    if (loading) {
        return (
            <LoadingProgressFallback />
        );
    }

    return (
        <ProductList products={products}/>
    );
};

export default ProductsPage;
