
import { paper, TableCell, TableContainer, TableHead, TableRow , TableBody} from "@mui/material";
const UsersTable = props =>
{
<TableContainer 
        component={paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                </TableBody>
            </Table>

</TableContainer>
}
export default UsersTable;