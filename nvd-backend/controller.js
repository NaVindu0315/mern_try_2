const { response } = require('./app');
const User = require('./model');


//create user

const addUser = (req,res,next)=>
{
    const user = new User(
        {
            id :  req.body.id,
            name: req.body.name,
        }
    )
}



//retrieve user
const getUsers = (req,res,next)=>
{
    User.find()
        .then(response=>
            {
                res.json({response})
            })
            .catch(error=>{
                res.json({message : error})
            })
}



//update user




//delete user





exports.getUsers = getUsers;
//exports.getUsersByID =getUsersByID;
