const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbLogin = require('./config/dbLogin');
const ItemModel = require('./model/ItemModel');
const uuid = require('uuid');

const app = express();

const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

mongoose.connect(dbLogin, {useNewUrlParser: true}).then(() => {
    console.log('Connected to mongodb')
}).catch(e => {
    console.log(e)
});

app.use(urlEncodedParser);
app.use(bodyParser.json());

// Define CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function (req, res) {
    ItemModel.find(function (err, items) {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.json(items);
            res.end()
        }
    });
});

app.post('/create', function (req, res) {
    if (req.body.name.length >= 2){
        const savedItem = new ItemModel({name: req.body.name, id: uuid(req.body.name)});
        savedItem.save().then(item => res.json(item))
    }
});

app.delete('/delete', function (req, res) {
    ItemModel.findOne({name: req.body.name}, function (err, item) {
        if (err) {
            console.log(err);
            res.end()
        } else {
            ItemModel.deleteOne({name: req.body.name}, function (err) {
                if (err) return err
            });
            res.end()
        }
    });
});

const port = 1337;
app.listen(port, () => {console.log(`Server listening on port ${port}`)});