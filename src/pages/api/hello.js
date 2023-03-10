// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const sanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require("helmet");
require('dotenv').config()

// importation des modèles sauces et users
const User = require('./models/users');
const Owner = require('./models/owners');
const Product = require('./models/products');

// importation des routes sauces et users
const ownerRoutes = require('./routes/owners');
const userRoutes = require('./routes/users');

const app = express();

// Connection avec la base de données MongoDB 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => {
  console.log('Connexion à MongoDB échouée !');
  console.log(err);
});

app.use(express.json());
app.use(cors());

// Gestion des erreurs CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
//app.use('/api/products', productsRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/auth', ownerRoutes);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200, // Limit each IP to 200 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter);
app.use(sanitize());
app.use(helmet());


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

module.exports = app;