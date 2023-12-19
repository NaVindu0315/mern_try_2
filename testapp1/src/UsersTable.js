
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
                                <TableRow key={row.id} sx ={{'&:last-child td,&:last-child th':{border:0}}}
                               
                                >
                                     <TableCell component='th' scope="row">
                                    (row.id)

                                </TableCell> 
                                <TableCell component='th' scope="row">
                                    (row.name)

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