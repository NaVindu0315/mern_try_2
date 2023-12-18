import {Button, Grid, Typography} from "@mui/material";

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
            <Grid item xs={12} sm={6} sx={{ display:'flex'}}
            
            >
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
                value={''}
                onChane={e =>{}}


//new text field in after two grids

            ></Input>

            </Grid>
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color:'#000000'}}></Typography>
                 </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex'}}
            
            >
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
            > Name</Typography>
            <Input
                type="text"
                id='name'
                name = "name"
                sx ={{width:'400px'}}
                value={''}
                onChane={e =>{}}



            ></Input>

            </Grid>

           

                <Button 
                sx ={{
                    margin:'auto',
                    marginBottom:'20px',
                    backgroundColor :'#00c6e6',
                    color:'#000000',
                    

                }}
                
                />


            </Grid>

    );
}
export default userform;