const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;

app.get('/api/admin', function(req, res) {
    console.log('get request for home page is recieved')
    res.json({
        server: 'the server express on 3100',
        client: 'client react on 3000'
    });
})

app.post('/api/admin/new', function() {
    console.log('Post request for adding a new hostel recieved');
    res.json({
        success: true
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


app.listen(PORT, function(){
    console.log("the server app is listening on port:", PORT);
})