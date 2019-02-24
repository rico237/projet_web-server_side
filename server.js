// Ajout de varibles d'environnement local
// Evite d'ajouter les clés directememnt dans le code
require('dotenv').config();					

/*
 * Import des librairies
 */
const express = require('express'); // Server Middleware
const mongoose = require('mongoose'); // Gestion de mongodb
const createError = require('http-errors'); // Gestion des erreurs
const bodyParser = require('body-parser'); // Parse incoming request bodies
const morgan = require('morgan');
const passport = require('passport'); // User auth lib (gestion de tokens)

const app = express(); // Init du serveur web
const port = process.env.PORT; // Definition du port selon les variables de l'environnement heroku

const Pusher = require('pusher'); // Add realtime processing (used for comments)
const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: 'eu'
});

// Configuration Server                                       
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// CROS Handle
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// MongoDB
const urlmongo = process.env.MONGODB_URI;
// Options recommandées par mLab pour une connexion à la base
const options = {
    useMongoClient: true,
};
// Connexion à la base mongodb
mongoose.connect(urlmongo, options);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', () => {
    console.log("Connexion à la base établie avec succès");
});

// Routes
const product = require('./routes/product'); // products
app.use("/products", product); // products

const comment = require('./routes/comment'); // Comments
app.use("/comments", comment);

const api = require('./routes/api'); // General
app.use("/api", api);

// Init passport lib
app.use(passport.initialize());

app.listen(port, () => {
    console.log("/*--- Listening on *:" + port + " ---*/");
});

module.exports = app;