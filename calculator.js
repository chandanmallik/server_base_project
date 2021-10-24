
const express = require('express');

const app = express();

app.get("/",function(req,res){

res.send('hello word')
});
app.listen(3000,function(req,res){
    console.log('sign in through the port 3000')
})