
import { paper, TableCell, TableContainer, TableHead, TableRow , TableBody} from "@mui/material";
const UsersTable = ({rows}) =>
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
                    {
                        rows.map(row => 
                            (
                                <TableRow>
                                     <TableCell component='th' scope="row">
                                    (row.id)

                                </TableCell>

                                </TableRow>
                               
                            )
                            )
                    }


                </TableBody>
            </Table>

</TableContainer>
}
export default UsersTable;