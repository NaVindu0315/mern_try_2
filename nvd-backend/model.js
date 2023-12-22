const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//defining the  details of user
const userSchema = new Schema(
    {
        id:Number,
        name : String,
    }
);

//const User = mongoose.model('User',userSchema);
//trying to chnge the  collection
const User = mongoose.model('employees',userSchema);
module.exports = User;