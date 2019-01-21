/*
 * Import des librairies
*/
let express 	= require('express'); 			// Librairie Server
let mongoose 	= require('mongoose'); 			// Gestion de mongodb
let logger 		= require('morgan'); 			// ???
let createError = require('http-errors'); 		// Gestion des erreurs
let path 		= require('path'); 				// ???
let morgan 		= require('morgan');			// ???
let bodyParser 	= require('body-parser');		// ???

let app 		= express();					// Init du serveur web
let config 		= require('config'); 			// Load config file
let port 		= process.env.PORT ||  8080;	// Definition du port selon les variables de l'environnement heroku

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
const urlmongo = process.env.MONGODB_URI || "mongodb://localhost:27017/off";
// Options recommandées par mLab pour une connexion à la base
let options = { useMongoClient: true };
// Connexion à la base mongodb
mongoose.connect(urlmongo, options); 
mongoose.Promise = global.Promise;		

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', () => {
    console.log("Connexion à la base établie avec succès"); 
});

// Routes
let product = require('./routes/product'); 	// products
app.use("/products", product);				// products

app.listen(port, () => {
	console.log("Listening on port " + port);
});

module.exports = app;