const collection = require('../dataModel/collections');

module.exports = (function () {
    console.log('Data seeder running....')
    collection.Notice.find({}, function(err, result) {
        if (result.length === 0) {
            collection.Notice.insertMany([
                {
                    id: 1234,
                    title: 'Last date of assignment submission extended',
                    details: 'IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA',
                    date: new Date()
    
                },
                {
                    id: 1235,
                    title: 'Use Digital Material',
                    details: 'Opt for digital material and get 15% discout.  Download econtent app for digital materials;  Download econtent app for digital materials.',
                    date: new Date()
                }  
            ])
        }
    })
    collection.Admin.find({}, function(err, result) {
        if (!err && result.length === 0) {
            collection.Admin.insertMany([{
                email: process.env.ADMIN_EMAIL,
                password: process.env.ADMIN_PASSWORD
            }]);
        }
    })
}) ()