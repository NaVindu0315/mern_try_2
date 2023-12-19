//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";

const users = [
    {
        id:1,
        name:'Navindu',
    },
    {
        id:2,
        name:'pakaya',
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