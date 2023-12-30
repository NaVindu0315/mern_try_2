
//variables
const port =3001;
const host ='localhost';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
//importing router
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://navindu0315:Navindu99@cluster0.do0vonn.mongodb.net/?retryWrites=true&w=majority"
const connect = async() => {
    try 
    {
        await mongoose.connect(uri);
        console.log('connected to mongodb');

    }
    catch(error){
        console.log('mongodb error ',error);
        
    }

}
connect();


const server = app.listen(port,host,()=>{
    console.log('Node server is listenging to ',server.address().port);
});

app.use('/api',router);