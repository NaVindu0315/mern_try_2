const app = require('./app');
//variables
const port =3001;


const server = app.listen(3001,'127.0.0.1',()=>{
    console.log('Node server is listenging to ${server.address().port} ')
})
