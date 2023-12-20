const express = require('express');
const app = express();
const cors = require('cors');
const controller =  require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
    

    
);
app.use(express.json());

//creating getAPI data retrieving api
app.get('/users',(req,res)=>{
    var resobj = [];
    controller.getUsers(req,res,next =>
        {
            res.send();
        });


});
//second 
app.get('/user',(req,res)=>
{
    const id  =req.query.id;
    controller.getUsersByID(id,user =>
        {
            res.send(user);
        })
    

});


module.exports = app;