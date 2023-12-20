const express = require('express');
//creating router instance
const router = express.Router();
const controller = require('./controller');
 
//creating routes for each

router.get('/users',controller.getUsers);
router.get('/createuser',controller.addUser);
router.get('/updateuser',controller.updateUser);
router.get('/deleteuser',controller.deleteUser);


module.exports = router;