const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noticeSchema = new Schema({
    title: String,
    details: String,
    date: { type: Date, default: Date.now }
});

const subscriberSchema = new Schema({
    name: String,
    email: String
});

const adminAccountSchema = new Schema({
    email: String,
    password: String
});


const Notice = mongoose.model('Notice', noticeSchema);
const Subscriber = mongoose.model('Subscriber', subscriberSchema);
const Admin = mongoose.model('Admin', adminAccountSchema);

module.exports = {
    Notice,
    Subscriber,
    Admin
}