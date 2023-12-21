//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";
//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";


const Users =() =>
{

        //creating a state variable inside the Users component
        const [users,setUsers] = useState([]);

        //to clear the fields once the data is submitted
        const [submitted,setSubmitted] = useState(false);
        //when updating 
        const [isedit,setIsEdit] = useState(false);

        //also in updating to fech the data
        const [selectedUser,setSelectedUser]= useState({});
        
        //when calling a function when the page runs 
    useEffect(()=>
        {
            getUsers();
        },[]);
    //call the api
    const getUsers =() =>
    {
        //the link given from the backend for getting users
        Axios.get('http://localhost:3001/api/users')
            .then(response=> {
               // console.log(response.data.response);
               setUsers(response?.data?.response || [])
            })
            .catch(error => {
                console.error("Axios Error :" ,error);
            })
                        {

            }
    }
    //adduser function

    const addUser = (data)=>
    {
        setSubmitted(true);
        ///creating the payload
        const payload=
        {
            id: data.id,
            name: data.name,

        }
        Axios.post('http://localhost:3001/api/createuser',payload)
        .then(response=> {
            // console.log(response.data.response);
           getUsers();
           setSubmitted(false);
           isedit(false);
         })
         .catch(error => {
             console.error("Axios Error :" ,error);
         })
                     {

         }

    }
    //update user 
    const updateUser=(data) =>
    {
        setSubmitted(true);
           ///creating the payload
           const payload=
           {
               id: data.id,
               name: data.name,
   
           }
           Axios.post('http://localhost:3001/api/updateuser',payload)
           .then(response=> {
               // console.log(response.data.response);
              getUsers();
              setSubmitted(false);
              isedit(false);
            })
            .catch(error => {
                console.error("Axios Error :" ,error);
            })
                        {
   
            }

    }
return(
    <Box 
     sx={{

        width: 'calc(100%- 100px)',
        margin : 'auto'

     }}
    >
          <Userform
          //adding prop for user form
          addUser ={addUser}
          updateUser ={updateUser}
          submitted ={submitted}
          //selecteduserdata
          data ={selectedUser}
          isedit={isedit}
          />

          
         <UsersTable rows= {users} 
         selectedUser={data=>{
            setSelectedUser(data);
            setIsEdit(true);
         }}
         
         />

    </Box>
  
);
}
export default Users;