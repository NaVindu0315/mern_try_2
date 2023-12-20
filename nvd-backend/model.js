const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//defining the  details of user
const userSchema = new Schema(
    {
        id:Number,
        name : String,
    }
);

const User = mongoose.model('User',userSchema);

module.exports = User;