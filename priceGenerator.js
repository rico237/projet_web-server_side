const axios = require('axios');

const store1 = {
    "id_store": "5c6aaf1ee7179a27eb626950",
    "name_store": "Monoprix",
    "prix": "5.59",
    "adresse": "Place Général de Gaulle, 06600 Antibes",
    "lat": "43.580968",
    "long": "7.120392"
};

const store2 = {
    "id_product": "5c658547d903a34c306ee7ea",
    "id_store": "5c6aabe4e7179a27eb6267de",
    "name_store": "Intermarché",
    "prix": "5.41",
    "adresse": "2 Boulevard Albert 1er 06600 ANTIBES",
    "lat": "43.579645",
    "long": "7.121243"
};
const store3 = {
    id_product: "5c658547d903a34c306ee7e9",
    id_store: "5c6aafd5e7179a27eb6269c1",
    name_store: "Carrefour",
    prix: "2.23",
    adresse: "Chemin de Saint-Claude, 06600 Antibes",
    lat: "43.604036",
    long: "7.089208"
};


function post(price) {
    axios.post('https://projet-web-ihm.herokuapp.com/Products/price', price)
        .then(response => console.log(response))
        .catch(function(error) {
            console.log(error);
        });
}

axios.get('https://projet-web-ihm.herokuapp.com/Products/all')
    .then(function(response) {
        for (let p of response.data.products) {
            price = 4 + Math.random() * 3;
            store3.id_product = p._id;
            store3.prix = price;
            post(store3);
        }
    })
    .catch(function(error) {
        console.log(error);
    });