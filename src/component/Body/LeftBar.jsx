import React from 'react';
import { Box, Typography } from '@mui/material';
import pic from './assets/saima.png'

const LeftBar = () => {
    return (
        <Box sx={{display:'flex',flexDirection:'column', alignItems:'center'}} >
            <Box sx={{width:'200px',height:'200px',borderRadius:"50%",justifyContent:"center", marginTop:"40px",alignItems:'center'}}>
        <img src={pic} width={'100%'} height={'100%'} style={{borderRadius:"50%"}}/>
        
      </Box>
      <Typography sx={{fontWeight:"bold",fontSize:"22px",margin:'10px',borderBottom:'3px solid #7A9EF3',paddingBottom:"20px",marginBottom:'30px',}}>Farhana Islam</Typography>
      
    <Typography sx={{fontSize:'20px'}}>FULLSTACK DEVELOPER</Typography>
        </Box>
      
    );
};

export default LeftBar;