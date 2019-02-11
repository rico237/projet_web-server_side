process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Product = require('../models/product');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
describe('/GET products', () => {
    it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/products/all')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.products.length.should.be.eql(10);
                done();
            });
    });
});

describe('/GET a product by ID', () => {
    it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/products/00000')
            .end((err, res) => {
                console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('languages_tags');
                res.body.should.have.property('images');
                res.body.should.have.property('languages');
                res.body.should.have.property('languages_codes');
                res.body.should.have.property('codes_tags');
                res.body.should.have.property('countries_tags');
                res.body.images.should.have.property('ingredients_fr');
                res.body.should.have.property('additives_tags');
                res.body.should.have.property('ingredients_original_tags');
                res.body.should.have.property('ingredients_hierarchy');
                done();
            });
    });
});


describe('/GET a addictives of a product', () => {
    it('it should GET all the addictives of a product', (done) => {
        chai.request(server)
            .get('/products/00000/additives')
            .end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('additives');
                done();
            });
    });
});


describe('/GET addictives of a non exist product', () => {
    it('it should return addictives = null', (done) => {
        chai.request(server)
            .get('/products/00001/additives')
            .end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('additives');
                should.equal(res.body.additives, null);
                done();
            });
    });
});

describe('/POST name of product', () => {
    it('it should return all products of the name', (done) => {
        let product = {
            productName: "riz",
            tabs: []
        };
        chai.request(server)
            .post('/products/find_allergens/ingredients')
            .send(product)
            .end((err, res) => {
                console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.products.length.should.be.eql(30);
                done();
            });
    });
});

describe('/POST name of an non exist product', () => {
    it('it should return empty products ', (done) => {
        let product = {
            productName: "zir",
            tabs: []
        };
        chai.request(server)
            .post('/products/find_allergens/ingredients')
            .send(product)
            .end((err, res) => {
                console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.products.length.should.be.eql(0);
                done();
            });
    });
});

describe('/POST search allergenes lait and yaourt', () => {
    it('it should return products with lait and yaourt ', (done) => {
        let product = {
            tabs: ["lait", "yaourt"]
        };
        chai.request(server)
            .post('/products/find_allergens')
            .send(product)
            .end((err, res) => {
                console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.products.length.should.be.eql(15);
                done();
            });
    });
});