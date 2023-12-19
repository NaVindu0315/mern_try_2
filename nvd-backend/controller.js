const users = 
[
    {
        id:1,
        name:'navindu',
    },
    {
        id:2,
        name:'pakaya'

    }
];

//creating function
const getUsers = (cb) =>
{
    cb(users);
};

//creating a function to get the user by id 
const getUsersByID = (id,cb)=>
{
    const user = users.find(user => user.id ==id)
}