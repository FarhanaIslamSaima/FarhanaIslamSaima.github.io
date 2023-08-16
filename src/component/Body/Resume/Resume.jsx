import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Skillset from './Skillset';
import { Grid, Typography ,Box, Button} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';

const Resume = () => {
    return (
        
        <Box sx={{background:'#E6DACE',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Typography sx={{marginTop:'50px',fontWeight:'bold'}} variant='h4'><SquareIcon sx={{color:'blue',marginRight:"10px"}}/>RESUME</Typography>
        
        <Grid container sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
           <Box sx={{display:'flex',width:"90%",justifyContent:"center",alignItems:"center",margin:"30px"}}>
            <Typography sx={{width:"45%",fontWeight:"bold"}} variant='h6'>EXPERIENCE</Typography>
              <Button variant='contained' color='primary'sx={{borderRadius:'25%',fontWeight:'bold'}}>DOWNLOAD CV</Button>
           </Box>
            <Grid item lg={12} xs={12}>
                <Experience></Experience>
            </Grid>
            <Grid item lg={12} xs={12}>
                <Education/>
            </Grid>
            <Grid item lg={12} xs={12}>
               <Skillset/>
            </Grid>

        </Grid>
        </Box>
        
    );
};

export default Resume;