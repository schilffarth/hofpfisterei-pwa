const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_HOST,
    credentials: true,
}));
app.use(cookieParser());

try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
} catch (e) {
    console.log("Couldn't connect to database");
    console.error(e);
}

// Import your route handlers here
const productRoutes = require('./routes/productRoutes');
// ...

// Mount your route handlers
app.use('/api/products', productRoutes);
// ...

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
