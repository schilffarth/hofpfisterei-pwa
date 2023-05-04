import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Box,
    TextField,
    Button,
    Stack,
    Typography,
    ListItem,
    List,
    InputAdornment,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Collapse,
    IconButton,
} from "@mui/material";
import {
    Add as AddIcon,
    Save as SaveIcon,
    Image as ImageIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import LoadingProgressFallback from "../../components/SuspenseFallback/LoadingProgressFallback.jsx";

import api from "../../utils/api/api";
import { showNotification } from "../../features/notificationSlice.js";

const AdminAssortmentPage = () => {
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
    }, [setProducts, dispatch]);

    return (
        <Box className="page">
            <CreateProduct
                products={products}
                setProducts={setProducts}
            />
            {loading ? (
                <LoadingProgressFallback />
            ) : (
                <ProductList
                    products={products}
                />
            )}
        </Box>
    );
};

const CreateProduct = ({
    products,
    setProducts,
}) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [allergens, setAllergens] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [priceKg, setPriceKg] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [size, setSize] = useState('');

    const checkPriceRegex = (string) => {
        return /^(\d+(\.\d*)?|\.\d+)?$/.test(string);
    }

    const handleClick = () => {
        setActive(!active);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleAllergensChange = (e) => {
        setAllergens(e.target.value);
    }

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    }

    const handlePriceKgChange = (e) => {
        if (checkPriceRegex(e.target.value)) {
            setPriceKg(e.target.value);
        }
    }

    const handlePriceChange = (e) => {
        if (checkPriceRegex(e.target.value)) {
            setPrice(e.target.value);
        }
    }

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        api.put('/products/create', {
            name,
            image,
            category,
            type,
            description,
            allergens: allergens.split(',').map(i => i.trim()),
            ingredients: ingredients.split(',').map(i => i.trim()),
            priceKg,
            price,
            discount,
            size
        }).then((res) => {
            setProducts([
                res.data.product, // Add the product to the product list at first position
                ...products
            ]);

            dispatch(showNotification({
                type: 'success',
                message: res.data.message,
            }));

            setActive(false);
            setName('');
            setImage('');
            setCategory('');
            setType('');
            setDescription('');
            setAllergens([]);
            setIngredients([]);
            setPriceKg('');
            setPrice('');
            setDiscount('');
            setSize('');
        }).catch((e) => {
            dispatch(showNotification({
                type: 'error',
                message: e.response?.data.message,
            }));
        });
    }

    return (
        <Box>
            {active ? (
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Verkehrsbezeichnung"
                        value={name}
                        onChange={handleNameChange}
                        autoFocus
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Bild"
                        value={image}
                        onChange={handleImageChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Kategorie z.B. Brot, Kleingebäck, Feingebäck, Kuchen, Ausschank, etc."
                        value={category}
                        onChange={handleCategoryChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Typ z.B. Roggenbrot, Weizenkleingebäck, Hefefeingebäck, etc."
                        value={type}
                        onChange={handleTypeChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Produktbeschreibung"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Allergene (csv) z.B. 'Weizen, Sesam'"
                        value={allergens}
                        onChange={handleAllergensChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Zutaten (csv) z.B. 'Weizenmehl, Milch, Ei'"
                        value={ingredients}
                        onChange={handleIngredientsChange}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Mindestgewicht pro Stück in Gramm"
                        value={size}
                        onChange={handleSizeChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">g</InputAdornment>,
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Preis pro Kilogramm in Euro"
                        value={priceKg}
                        onChange={handlePriceKgChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Preis pro Stück in Euro"
                        value={price}
                        onChange={handlePriceChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        margin="normal"
                        label="Aktiver Rabatt in Prozent"
                        value={discount}
                        onChange={handleDiscountChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<SaveIcon />}
                        sx={{
                            marginTop: '1rem',
                            padding: '1rem',
                        }}
                    >
                        Erstellen
                    </Button>
                </form>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleClick}
                >
                    <Stack sx={{ padding: '1rem' }} direction="column" alignItems="center">
                        <AddIcon />
                        <Typography
                            variant="overline"
                        >
                            Neues Produkt
                        </Typography>
                    </Stack>
                </Button>
            )}
        </Box>
    );
};

const ProductList = ({
    products,
}) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (productId) => {
        setActiveItem(productId === activeItem ? null : productId);
    };

    return (
        <List>
            {products.map((product) => {
                const expanded = product['_id'] === activeItem;

                return (<>
                    <ListItem
                        key={product.id}
                        sx={{
                            marginTop: '1rem',
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar alt={product.name} src={`/products/${product.image}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name}
                            primaryTypographyProps={{ variant: 'h6' }}
                            secondary={product.description}
                            secondaryTypographyProps={{ variant: 'body1' }}
                        />
                        <IconButton onClick={() => handleClick(product['_id'])}>
                            {expanded ? (
                                <ExpandLessIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </IconButton>
                    </ListItem>
                    <Collapse
                        key={product.id + "-collapse"}
                        in={expanded}
                    >
                        <List dense sx={{bgcolor: 'background.paper'}}>
                            <ListItem key="name">
                                <ListItemText
                                    inset
                                    primary="Verkehrsbezeichnung"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.name}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="image">
                                <ListItemText
                                    inset
                                    primary="Bild"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.image}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="category">
                                <ListItemText
                                    inset
                                    primary="Kategorie"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.category}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="type">
                                <ListItemText
                                    inset
                                    primary="Typ"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.type}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="description">
                                <ListItemText
                                    inset
                                    primary="Produktbeschreibung"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.description}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="allergens">
                                <ListItemText
                                    inset
                                    primary="Allergene"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.allergens.join(', ')}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="ingredients">
                                <ListItemText
                                    inset
                                    primary="Zutaten"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.ingredients.join(', ')}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="size">
                                <ListItemText
                                    inset
                                    primary="Mindestgewicht pro Stück in Gramm"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.size + 'g'}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="priceKg">
                                <ListItemText
                                    inset
                                    primary="Preis pro Kilogramm"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.priceKg + '€'}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="price">
                                <ListItemText
                                    inset
                                    primary="Preis pro Stück"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.price + '€'}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                            <ListItem key="discount">
                                <ListItemText
                                    inset
                                    primary="Aktiver Rabatt"
                                    primaryTypographyProps={{ variant: 'body2', color: 'grey', }}
                                    secondary={product.discount + '%'}
                                    secondaryTypographyProps={{ variant: 'body1', color: 'inherit', }}
                                />
                            </ListItem>
                        </List>
                    </Collapse>
                </>)
            })}
        </List>
    );
}

export default AdminAssortmentPage;
