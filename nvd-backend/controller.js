const { response } = require('./app');
const User = require('./model');


//create user



//retrieve user
const getUsers = (req,res,next)=>
{
    User.find()
        .then(response=>
            {
                res.json({response})
            }
            )
}



//update user




//delete user





exports.getUsers = getUsers;
exports.getUsersByID =getUsersByID;
