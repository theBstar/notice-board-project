const nodemailer = require('nodemailer');
const collection = require('./dataModel/collections');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

module.exports = function () {
    if (process.env.MAIL_FLAG) {
        collection.Subscriber.find({}, function (err, results) {
            if (results) {
                results.forEach(function (subscriber) {
                    const mailOptions = {
                        from: process.env.MAIL_FROM,
                        to: subscriber.email,
                        subject: 'New notice added',
                        text: `Dear ${subscriber.name} a new notice has been added to the notice board.`
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                })
            }
        })
    }
}
