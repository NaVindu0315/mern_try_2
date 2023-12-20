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
app.post('/user',(req,res)=>
{
    
    controller.addUser(req.body,(callback)=>
        {
            res.send();
            

        }
    );

});


module.exports = app;