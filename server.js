const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const users = require('./data/users.json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id/about-me', (req, res) => {
    const result = users.filter(user => user.id === req.params.id)[0];
    res.send(result.about);
});
app.post('/friend_request',function(req,res){
    var sender= req.body.sender_id;
    console.log(sender);
    var receiver=req.body.receiver_id;
    console.log(receiver);
    
    if(sender!== receiver) {
        console.log("Request Sent");
        res.send("Request Sent");
    }
    else{
        console.log("Bad Request");
        res.send("Bad request");
    }
  });

app.listen(8080, () => {
  console.log(`Server listening on port 8080...`);
});