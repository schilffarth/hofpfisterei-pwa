import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Collapse,
    CardMedia,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    AddShoppingCart as AddShoppingCartIcon,
} from '@mui/icons-material';

const ProductList = ({ products }) => {
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
                <ProductCard key={product._id} product={product} />
            ))}
        </Box>
    );
};

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCartClick = () => {
        // todo
        console.log('todo: ProductList: ProductCard.handleCartClick()')
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
                        zIndex: '1',
                    }}
                />
            </Box>
            <CardActions>
                <Typography variant="body2">{product.priceKg.toFixed(2)} € / kg</Typography>
                <IconButton
                    onClick={handleCartClick}
                    aria-label="show more"
                    sx={{ marginLeft: 'auto' }}
                >
                    <AddShoppingCartIcon color="primary" />
                </IconButton>
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="subtitle1">Allergens:</Typography>
                    <Typography variant="body2">{product.allergens.join(', ')}</Typography>
                    <Typography variant="subtitle1">Ingredients:</Typography>
                    <Typography variant="body2">{product.ingredients.join(', ')}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProductList;
