const express = require('express');
//creating router instance
const router = express.Router();
const controller = require('./controller');
 
//creating routes for each

router.get('/users',controller.getUsers);
router.post('/createuser',controller.addUser);
router.post('/updateuser',controller.updateUser);
router.post('/deleteuser',controller.deleteUser);


module.exports = router;