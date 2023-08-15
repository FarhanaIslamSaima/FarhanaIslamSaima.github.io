import React from 'react';
import {Box,Typography} from '@mui/material'

const RightBar = () => {
    return (
      <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
        <Typography variant={'h1'} sx={{fontWeight:"bold",margin:"30px",fontSize:'85px'}}>HELLO</Typography>
        <Typography sx={{fontWeight:'bold',fontSize:"20px"}}>HERE IS WHO I AM & WHAT I DO</Typography>

      </Box>
    );
};

export default RightBar;