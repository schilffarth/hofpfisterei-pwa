import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
} from "@mui/material";

import ProductList from "../components/ProductList/ProductList.jsx";
import StoreAutocomplete from "../components/StoreOptions/StoreAutocomplete.jsx";
import LoadingProgressFallback from "../components/SuspenseFallback/LoadingProgressFallback.jsx";
import { showNotification } from "../features/notificationSlice.js";
import api from "../utils/api/api.js";
import { setStore } from "../features/preorderCartSlice";
import { storeOptions } from "../components/StoreOptions/storeOptions.js";

const PreorderPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [storeInputValue, setStoreInputValue] = useState('');

    const storeValue = useSelector((state) => state.preorderCart.store);
    const setStoreValue = (value) => dispatch(setStore(value));

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

    return (
        <Box className="page preorder-page">
            <StoreAutocomplete />
            <Box sx={{ height: '1rem' }} />
            {loading ? (
                <LoadingProgressFallback />
            ) : (
                <ProductList products={products} />
            )}
        </Box>
    );
};

export default PreorderPage;
