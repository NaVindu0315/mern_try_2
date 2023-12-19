
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
                            ID
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>

</TableContainer>
}
export default UsersTable;