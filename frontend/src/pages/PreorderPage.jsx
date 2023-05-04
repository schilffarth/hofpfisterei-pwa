import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Autocomplete,
    TextField,
} from "@mui/material";

import ProductList from "../components/ProductList/ProductList.jsx";
import LoadingProgressFallback from "../components/SuspenseFallback/LoadingProgressFallback.jsx";
import { showNotification } from "../features/notificationSlice.js";
import api from "../utils/api/api.js";
import { setStore } from "../features/preorderCartSlice";

const PreorderPage = () => {
    const storeOptions = [
        'Konradinstraße 16, 81543 München',
        'Humboldtstraße 9, 81543 München',
        'Grünwalder Straße 10, 81547 München',
        'Tegernseer Landstraße 48, 81541 München',
        'Falkenstraße 2, 81541 München',
        'Deisenhofener Straße 42, 81539 München',
        'Kyreinstraße 10, 81371 München',
        'Kapuzinerstraße 2, 80337 München',
        'Müllerstraße 51, 80469 München',
        'Plinganserstraße 37, 81369 München',
        'Blumenstraße 1, 80331 München',
        'Zweibrückenstraße 1, 80331 München',
        'Weißenburger Straße 4, 81667 München',
        'Viktualienmarkt 5, 80331 München',
        'Johann-Clanze-Straße 24, 81369 München',
        'Schwanseestraße 67, 81549 München',
        'Karlsplatz 11, 80335 München',
        'Sparkassenstraße 12, 80331 München',
        'Armanspergstraße 1, 81545 München',
        'Ganghoferstraße 19, 80339 München',
        'Karl-Spengler-Straße 4, 80339 München',
        'Orleansplatz 10-12, 81667 München',
        'Hauptbahnhof Zwischengeschoss, Bahnhofplatz, 80335 München',
        'Albert-Roßhaupter-Straße 92, 81369 München',
        'Arnulfstraße 1, 80335 München',
        'Liebigstraße 10a, 80538 München',
        'Boschetsrieder Straße 69, 81379 München',
        'Brienner Straße 59, 80333 München',
        'Einsteinstraße 115, 81675 München',
        'Hansastraße 17, 80686 München',
        'Lazarettstraße 2, 80636 München',
        'Ismaninger Straße 62, 81675 München',
        'Kreittmayrstraße 5, 80335 München',
        'Barer Straße 51, 80799 München',
        'Schellingstraße 115, 80796 München',
        'Waldfriedhofstraße 89, 81377 München',
        'Nymphenburger Straße 155, 80634 München',
        'Nordendstraße 64, 80801 München',
        'Hohenzollernstraße 124, 80796 München',
        'Oberföhringer Straße 2, 81679 München',
    ];

    const [storeInputValue, setStoreInputValue] = useState('');

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <Box className="page">
            <AutoComplete
                options={storeOptions}
                value={storeValue}
                setValue={setStoreValue}
                inputValue={storeInputValue}
                setInputValue={setStoreInputValue}
            />
            <Box sx={{ height: '1rem' }} />
            {loading ? (
                <LoadingProgressFallback />
            ) : (
                <ProductList products={products} />
            )}
        </Box>
    );
};

const AutoComplete = ({
    options,
    value,
    setValue,
    inputValue,
    setInputValue,
}) => {
    return (
        <Box>
            <Autocomplete
                fullWidth
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-stores-select"
                options={options}
                renderInput={(params) => (
                    <TextField {...params} label="Filiale" />
                )}
            />
        </Box>
    );
};

export default PreorderPage;
