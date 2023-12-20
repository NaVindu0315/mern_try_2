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
    );
    user.save()
    .then(response=>
        {
            res.json({response})
        })
        .catch(error=>{
            res.json({error})
        });
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
                res.json({error})
            });
}



//update user
const updateUser  = (req,res,next)=> 
{
    //object destructuring 
    const {id,name} = req.body;
    User.updateOne({id:id}, { $set : {name :name}
    })
    .then(response=>
        {
            res.json({response})
        })
        .catch(error=>{
            res.json({error})
        });

}


//delete user
const deleteUser = (req,res,next)=>
{
    const id = req.body.id;
    User.deleteOne({id:id})
    .then(response=>
        {
            res.json({response})
        })
        .catch(error=>{
            res.json({error})
        });

}




exports.getUsers = getUsers;
//exports.getUsersByID =getUsersByID;
