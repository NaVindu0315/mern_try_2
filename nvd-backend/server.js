const app = require('./app');
//variables
const port =3001;
const host ='127.0.0.1';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const server = app.listen(port,host,()=>{
    console.log('Node server is listenging to ${server.address().port} ');
});
