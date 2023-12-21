//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";
//import for connecting backend and front end
import Axios from "axios";

const users = [
    {
        id:1,
        name:'Navindu',
    },
    {
        id:2,
        name:'pakaya',
    },
    {
        id:3,
        name:'hutti',
    }

];
const Users =() =>
{
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