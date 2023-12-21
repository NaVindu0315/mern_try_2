//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";
//import for connecting backend and front end
import Axios from "axios";


const Users =() =>
{

        //creating a state variable inside the Users component
        const [users,setUsers] = useState([]);

    //call the api
    const getUsers =() =>
    {
        //the link given from the backend for getting users
        Axios.get('http://localhost:3001/api/users')
            .then(response=> {
                console.log(response);
            })
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