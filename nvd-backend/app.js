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
//retreving data 
app.get('/users',(req,res)=>{
    var resobj = [];
    controller.getUsers(req,res,next =>
        {
            res.send();
        });


});
//adding new user
app.post('/createuser',(req,res)=>
{
    
    controller.addUser(req.body,(callback)=>
        {
            res.send();


        }
    );

});

//update user 
app.post('/updateuser',(req,res)=>
{
    
    controller.updateUser(req.body,(callback)=>
        {
            res.send(callback);


        }
    );

});



app.post('/deleteuser',(req,res)=>
{
    
    controller.deleteUser(req.body,(callback)=>
        {
            res.send(callback);


        }
    );

});

module.exports = app;