const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const collection = require('./dataModel/collections');
require('./startup/dataSeeder')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, function(err) {
    if (err) console.log('Error connecting to db', err)
});
app.use(bodyParser.urlencoded({ extended: false }));


app.route('/api/notice')
    .get(function(req, res) {
    console.log('get request for home page is recieved, getting all notices')
    res.json({
        server: 'the server express on 3100',
        client: 'client react on 3000'
    });
    }).post(function() {
    console.log('Post request for adding a new notice recieved');
    res.json({
        success: true
    });
    });

app.post('/api/admin/login', function(req, res) {
    res.send('loggedIn')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;