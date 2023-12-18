import {Grid, Typography} from "@mui/material";

const userform = props => {
    return (
        <Grid
            container
            spacing={2}
            sx={
                {
                    backgroundColor: '#ffffff',
                    marginBottom: '30px',
                    display:'block',

                }
            }
        >
            <Grid item
                    xs={12}>
                <Typography component={'h1'}></Typography>


            </Grid>
            


        </Grid>
    );
}
export default userform;