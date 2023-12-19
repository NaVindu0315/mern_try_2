const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
    

    
);
app.use(express.json());

//creating getAPI data retrieving api

module.exports = app;