const express = require("express");
const app = express();
const port = 8000;

//ROUTES
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
