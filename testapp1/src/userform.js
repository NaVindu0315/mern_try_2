import {Button, Grid, Typography} from "@mui/material";

const Userform = props => {
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
                <Typography component={'h1'} sx={{color:'#000000'}}>ddd</Typography>
                
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
            <input
  type="text"
  id="name"
  // Remove or replace with a valid prop
  // sx={{ width: "400px" }}
  value=""  // Choose consistent way to set initial value
  onChange={e => {
    // Implement your logic to handle user input
    console.log(e.target.value);  // Example: log the new value
  }}
/>


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
           <input
  type="text"
  id="name"
  // Remove or replace with a valid prop
  // sx={{ width: "400px" }}
  value=""  // Choose consistent way to set initial value
  onChange={e => {
    // Implement your logic to handle user input
    console.log(e.target.value);  // Example: log the new value
  }}
/>

            


            </Grid>

           

                <Button 
                sx ={{
                    margin:'auto',
                    marginBottom:'20px',
                    backgroundColor :'#00c6e6',
                    color:'#000000',
                    marginLeft:'15px',
                    marginTop:'20px',
                    '&:hover':
                    {
                        opacity:'0.7',
                        backgroundColor:'00c6e6',
                    }

                }}
                
                />


            </Grid>

    );
}
export default Userform;