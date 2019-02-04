process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Product = require('../models/product');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Produit', () => {
    beforeEach((done) => {
        Book.remove({}, (err) => {
            done();
        });
    });
});