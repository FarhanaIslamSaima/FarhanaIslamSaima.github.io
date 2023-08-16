import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Skillset from './Skillset';
import { Grid, Typography ,Box, Button} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import SSC from './SSC';
import HSC from './HSC';
import BSC from './BSC';
import Language from './Language';

const Resume = () => {
    return (
        
        <Box sx={{background:'#E6DACE',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Typography sx={{marginTop:'50px',fontWeight:'bold'}} variant='h4'><SquareIcon sx={{color:'blue',marginRight:"10px"}}/>RESUME</Typography>
        
        <Grid container sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
           <Box sx={{display:'flex',width:"70%",justifyContent:"space-between",alignItems:"center",margin:"30px"}}>
            <Typography sx={{fontWeight:"bold"}} variant='h6'>EXPERIENCE</Typography>
              <Button variant='contained' color='primary'sx={{borderRadius:'25%',fontWeight:'bold'}}>DOWNLOAD CV</Button>
           </Box>
            <Grid item lg={12} xs={12}>
                <Experience></Experience>
            </Grid>
            <Box sx={{display:'flex',width:"70%",justifyContent:"space-between",alignItems:"center",margin:"30px"}}>
            <Typography sx={{width:"65%",fontWeight:"bold"}} variant='h6'>EDUCATION</Typography>
            
           </Box>
            <Grid item lg={12} xs={12}>
           
               <BSC></BSC>
               <HSC></HSC>
               <SSC></SSC>
            </Grid>
            <Box sx={{display:'flex',width:"70%",justifyContent:"space-between",alignItems:"center",margin:"30px"}}>
            <Typography sx={{width:"65%",fontWeight:"bold"}} variant='h6'>SKILLSET</Typography>
            
           </Box>
            <Grid item lg={12} xs={12}>

               <Skillset/>
               <Language/>
            </Grid>

        </Grid>
        </Box>
        
    );
};

export default Resume;