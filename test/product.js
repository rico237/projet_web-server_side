process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Product = require('../models/product');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

<<<<<<< HEAD
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
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('languages_tags');
                res.body.should.have.property('images');
                res.body.should.have.property('ingredients_fr');
                res.body.should.have.property('languages');
                res.body.should.have.property('languages_codes');
                res.body.should.have.property('codes_tags');
                res.body.should.have.property('countries_tags');
                res.body.should.have.property('additives');
                done();
            });
    });
});


describe('/GET a addictives of a product', () => {
    it('it should GET all the addictives of a product', (done) => {
        chai.request(server)
            .get('/products/00000/addictives')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
=======
describe('Produit', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
>>>>>>> 40b179af1b5d51244e6154a8ebb97cb8f541d6ee
    });
});