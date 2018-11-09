require('dotenv').config()
const PORT = process.env.PORT || 3100;
const app = require('./server/app.js');

app.listen(PORT, function(){
    console.log("the server app is listening on port:", PORT);
}) 