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
app.post('/newpost',function(req,res){
    var sender= req.body.sender_id;
    console.log(sender);
    res.send("posted");
  });
app.get('/users/1/feed',(req,res)=>{
  const result = user.filter(user=>user.id === req.params.id)[0];
  res.send(result.feed);
})

app.listen(8080, () => {
  console.log(`Server listening on port 8080...`);
});