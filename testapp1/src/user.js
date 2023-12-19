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
    <Box>
          <Userform/>
    <UsersTable/>

    </Box>
  
);
}
export default Users;