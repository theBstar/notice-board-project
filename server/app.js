const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const collection = require('./dataModel/collections');
const sendMailToSubscriber = require('./nodeMailer');
require('./startup/dataSeeder')



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, function (err) {
    if (err) console.log('Error connecting to db', err)
});
app.use(bodyParser.urlencoded({ extended: false }));


app.route('/api/notice')
    .get(function (req, res) {
        console.log('api/notice get request received, get all notice')
        collection.Notice.find({}).sort({ date: -1 }).limit(20).exec(
            function (err, result) {
                if (!err) {
                    res.json(result);
                }
            }
        )
    }).post(function (req, res) {
        console.log('api/notice post request received, add new notice', JSON.stringify(req.body));
        if (req.body.token && req.body.title && req.body.details) {
            collection.Admin.findOne({ token: req.body.token }, function (error, admin) {
                if (!error) {
                    if (admin) {
                        collection.Notice.create({
                            title: req.body.title,
                            details: req.body.details,
                            date: req.body.date
                        }, function (err, result) {
                            if (!err && result) {
                                res.json({
                                    success: true,
                                    noticeId: result._id
                                })
                                sendMailToSubscriber()
                            }
                        })
                    }else {
                        res.json({
                            success: false,
                            notAdmin: true
                        })
                    }
                }else {
                    res.json({
                        success: false,
                    })
                }
            })
        }else {
            res.json({
                success: false
            })
        }
    });

app.post('/api/subscribe', function (req, res) {
    console.log('api/subscribe post request received, new subscriber', JSON.stringify(req.body));
    if (req.body.name && req.body.email) {
        collection.Subscriber.create({
            name: req.body.name,
            email: req.body.email
        }, function (err, result) {
            if (!err && result) {
                res.json({
                    success: true
                })
            }
        })
    } else {
        res.json({
            success: false
        })
    }
})

app.post('/api/admin/login', function (req, res) {
    console.log('api/admin/login post request received, admin login');
    if (req.body.password && req.body.email) {
        collection.Admin.findOne({
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (!err && result) {
                res.json({
                    success: true,
                    token: result.token
                })
            }
        })
    } else {
        res.json({
            success: false
        });
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;