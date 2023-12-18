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
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color:'#000000'}}></Typography>
                 </Grid>
            <Grid>

            </Grid>

            <Typography 
            component={'label'}
            htmlFor="id"
            sx={
                {
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                }}
            > ID </Typography>
            <Input
                type="number"
                id='id'
                name = "id"
                sx ={{width:'400px'}}
                

            ></Input>




            </Grid>

    );
}
export default userform;