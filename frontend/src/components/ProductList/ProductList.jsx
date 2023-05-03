import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Collapse,
    CardMedia,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText, TextField,
} from "@mui/material";
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    AddShoppingCart as AddShoppingCartIcon,
    Add as AddIcon,
    Remove as RemoveIcon,
} from "@mui/icons-material";

import { addItem } from "../../features/preorderCartSlice.js";
import {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    displayFraction,
} from "../../utils/quantityHandlers.js";

const ProductList = ({
    products,
}) => {
    return (
        <Box
            className="product-list"
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                },
                gap: '1rem',
                padding: '1rem',
            }}
        >
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </Box>
    );
};

const ProductCard = ({
    product,
}) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState('0.5');
    const [comment, setComment] = useState('');

    const cartRef = useRef(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCartClick = () => {
        setOpen(true);
        setQuantity('0.5');
        setComment('');
    };

    const handleMenuClose = () => {
        setOpen(false);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleIncrease = () => {
        setQuantity(handleIncreaseQuantity(quantity));
    };

    const handleDecrease = () => {
        setQuantity(handleDecreaseQuantity(quantity));
    };

    const handleAddToPreorderCart = () => {
        dispatch(addItem({
            productId: product['_id'],
            name: product.name,
            quantity,
            comment,
        }));

        handleMenuClose();
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}
        >
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <CardContent
                    sx={{
                        flexGrow: 1,
                        width: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        zIndex: '2',
                    }}
                >
                    <Box>
                        <Typography variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="overline" color="text.secondary" gutterBottom>
                            {product.category} | {product.type}
                        </Typography>
                    </Box>
                    <Typography>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt={product.name}
                    image={`/products/${product.image}`}
                    sx={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        position: 'relative',
                        right: '1rem',
                        top: '1rem',
                        zIndex: '1',
                    }}
                />
            </Box>
            <CardActions>
                <Typography variant="body2">{product.priceKg.toFixed(2)} € / kg</Typography>
                <IconButton
                    ref={cartRef}
                    onClick={handleCartClick}
                    aria-label="Mehr anzeigen"
                    sx={{ marginLeft: 'auto' }}
                >
                    <AddShoppingCartIcon color="primary" />
                </IconButton>
                <Menu
                    anchorEl={cartRef.current}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>
                        <IconButton onClick={handleDecrease} aria-label="Decrease quantity" size="small">
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body1" sx={{
                            margin: '0 1rem',
                            width: '100%',
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            {displayFraction(quantity)}
                        </Typography>
                        <IconButton onClick={handleIncrease} aria-label="Increase quantity" size="small">
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <TextField
                            variant="filled"
                            label="Kommentar"
                            value={comment}
                            onChange={handleCommentChange}
                            sx={{
                                width: '200px',
                            }}
                        />
                    </MenuItem>
                    <MenuItem onClick={handleAddToPreorderCart}>
                        <ListItemIcon>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Hinzufügen
                        </ListItemText>
                    </MenuItem>
                </Menu>
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Mehr anzeigen"
                    sx={{marginLeft: 'auto'}}
                >
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="subtitle1">Allergene:</Typography>
                    <Typography variant="body2">{product.allergens.join(', ')}</Typography>
                    <Typography variant="subtitle1">Zutaten:</Typography>
                    <Typography variant="body2">{product.ingredients.join(', ')}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProductList;
