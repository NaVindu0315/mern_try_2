//importing
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
    <Userform/>
    <UsersTable/>
);
}
export default Users;