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

    const addUser = ()=>
    {
        ///creating the payload
        const payload
        Axios.post('http://localhost:3001/api/createuser',payload)

    }
return(
    <Box 
     sx={{

        width: 'calc(100%- 100px)',
        margin : 'auto'

     }}
    >
          <Userform/>
         <UsersTable rows= {users} />

    </Box>
  
);
}
export default Users;