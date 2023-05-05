import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    IconButton,
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Divider,
    CardActions,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@mui/material";
import {
    Check as CheckIcon,
    MonetizationOn as MonetizationOnIcon,
    ShoppingCart as ShoppingCartIcon,
    Check as CheckCircleIcon,
} from "@mui/icons-material";
import StoreAutocomplete from "../../components/StoreOptions/StoreAutocomplete.jsx";
import LoadingProgressFallback from "../../components/SuspenseFallback/LoadingProgressFallback.jsx";

import api from "../../utils/api/api.js";
import { showNotification } from "../../features/notificationSlice.js";
import { displayFraction } from "../../utils/quantityHandlers.js";

const AdminPreordersPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [preorders, setPreorders] = useState([]);
    const [products, setProducts] = useState({});
    const store = useSelector((state) => state.preorderCart.store);

    useEffect(() => {
        api.get('/preorders').then((res) => {
            if (!store) {
                setPreorders(res.data);
            } else {
                setPreorders(res.data.filter((preorder) => {
                    console.log(preorder);
                    return preorder.store === store;
                }));
            }

            return api.get('/products');
        }).then((res) => {
            let prodData = {};

            for (let i = 0; i < res.data.length; i++) {
                // set products as {productId: {product}}
                prodData[res.data[i]['_id']] = res.data[i];
            }

            setProducts(prodData);
        }).catch((e) => {
            console.error(e);
            dispatch(showNotification({
                type: 'error',
                message: e.response?.data.message,
            }));
        }).finally(() => {
            setLoading(false);
        });
    }, [store]);

    if (loading) {
        return <LoadingProgressFallback />;
    }

    const handleConfirm = async (preorder) => {
        try {
            const updatedPreorder = { ...preorder, confirmed: !preorder.confirmed };
            const res = await api.post(`/preorders/update`, updatedPreorder);
            setPreorders(preorders.map((p) => (p._id === preorder._id ? res.data : p)));
        } catch (error) {
            console.error(error);
        }
    };

    const handlePaid = async (preorder) => {
        try {
            const updatedPreorder = { ...preorder, paid: !preorder.paid };
            const res = await api.post(`/preorders/update`, updatedPreorder);
            setPreorders(preorders.map((p) => (p._id === preorder._id ? res.data : p)));
        } catch (error) {
            console.error(error);
        }
    };

    const handleCollected = async (preorder) => {
        try {
            const updatedPreorder = { ...preorder, collected: !preorder.collected };
            const res = await api.post(`/preorders/update`, updatedPreorder);
            setPreorders(preorders.map((p) => (p._id === preorder._id ? res.data : p)));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box className="page">
            <StoreAutocomplete initialInputValue={''} />
            <PreorderList
                preorders={preorders}
                products={products}
                onConfirm={handleConfirm}
                onPaid={handlePaid}
                onCollected={handleCollected}
            />
        </Box>
    );
};

const StatusIcons = ({ confirmed, paid, collected }) => (
    <List dense>
        {confirmed && (
            <ListItem key="success">
                <ListItemIcon>
                    <CheckCircleIcon color="success" fontSize="xs" />
                </ListItemIcon>
                <ListItemText
                    primary="Bestätigt"
                />
            </ListItem>
        )}
        {paid && (
            <ListItem key="paid">
                <ListItemIcon>
                    <MonetizationOnIcon color="success" fontSize="xs" />
                </ListItemIcon>
                <ListItemText
                    primary="Bezahlt"
                />
            </ListItem>
        )}
        {collected && (
            <ListItem key="collected">
                <ListItemIcon>
                    <ShoppingCartIcon color="success" fontSize="xs" />
                </ListItemIcon>
                <ListItemText
                    primary="Abgeholt"
                />
            </ListItem>
        )}
    </List>
);

const PreorderList = ({
    preorders,
    products,
    onConfirm,
    onPaid,
    onCollected,
}) => {
    return (
        <Grid
            container
            spacing={3}
            sx={{ marginTop: 1 }}
        >
            {preorders.map((preorder, index) => (
                <Grid item xs={12} key={preorder._id}>
                    <Card>
                        <CardHeader
                            title={new Date(preorder.pickup).toLocaleString()}
                            subheader={preorder.store}
                            action={
                                <StatusIcons
                                    confirmed={preorder.confirmed}
                                    paid={preorder.paid}
                                    collected={preorder.collected}
                                />
                            }
                        />
                        <CardContent>
                            <Typography variant="overline">Abholnummer:</Typography>
                            <Typography variant="h5" color="primary">{++index}</Typography>
                            <br/>
                            <Typography variant="overline">Kontakt:</Typography>
                            <Typography variant="body1">{preorder.customerName}</Typography>
                            <Typography variant="body1">{preorder.customerEmail}</Typography>
                            <Typography variant="body1">{preorder.customerPhone}</Typography>
                            <br/>
                            <Typography variant="overline">Produkte:</Typography>
                            {preorder.products.map((product, index) => (
                                <>
                                    {index > 0 && <Divider sx={{margin: '0.5rem 0'}}/>}
                                    <Typography variant="body1" key={product._id}>
                                        {displayFraction(product.quantity)} {product.name}
                                    </Typography>
                                    {product.comment && (
                                        <Typography variant="body2">
                                            {product.comment}
                                        </Typography>
                                    )}
                                </>
                            ))}
                        </CardContent>
                        <CardActions sx={{
                            justifyContent: 'end',
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            {preorder.confirmed || (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={preorder.confirmed}
                                    onClick={() => onConfirm(preorder)}
                                    startIcon={<CheckIcon />}
                                    sx={{maxWidth: '100%'}}
                                >
                                    Bestätigen
                                </Button>
                            )}
                            {preorder.confirmed && !preorder.paid && (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={preorder.paid}
                                    onClick={() => onPaid(preorder)}
                                    startIcon={<MonetizationOnIcon />}
                                >
                                    Wurde Bezahlt
                                </Button>
                            )}
                            {preorder.confirmed && preorder.paid && !preorder.collected && (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={preorder.collected}
                                    onClick={() => onCollected(preorder)}
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Wurde Abgeholt
                                </Button>
                            )}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AdminPreordersPage;
