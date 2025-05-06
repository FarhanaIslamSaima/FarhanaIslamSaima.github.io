import React from 'react';
import {Box, Typography} from '@mui/material'

const SSC = () => {
    return (
        <>
        <Box sx={{display:{xs:'none',lg:"flex"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>2009-2019</Typography>
            <Box sx={{ width:"100%",display:"flex"}}>
            
                <Box sx={{width:"50%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography sx={{fontSize:'20px', fontWeight:'bold'}}>Secondary School Certificate</Typography>
                <Typography sx={{fontSize:'14px'}}>Monipur High School & College</Typography>
                <Typography sx={{fontSize:'14px'}}>Dhaka</Typography>

                </Box>
                <Box sx={{width:"50%"}}>
                <Typography sx={{ color: 'grey', lineHeight: '30px' }}>
  I secured a GPA of 5.00 in the SSC exam. School life is always a memorable journey. 
  I got interested in coding and started my development journey during my school years. 
  Back then, these things were more of a hobby for me, but remembering those days always melts my heart.
</Typography>

                </Box>
            </Box>

        </Box>

        <Box sx={{display:{xs:'flex',lg:"none"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>2009-2019</Typography>
            <Box sx={{ width:"100%",display:"flex",flexDirection:'column'}}>
            
                <Box sx={{width:"100%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography sx={{fontSize:'20px', fontWeight:'bold'}}>Secondary School Certificate</Typography>
                <Typography sx={{fontSize:'14px'}}>Monipur High School & College</Typography>
                <Typography sx={{fontSize:'14px'}}>Dhaka</Typography>

                </Box>
                <Box sx={{width:"100%"}}>
                <Typography sx={{ color: 'grey', lineHeight: '30px' }}>
  I secured a GPA of 5.00 in the SSC exam. School life is always a memorable journey. 
  I got interested in coding and started my development journey during my school years. 
  Back then, these things were more of a hobby for me, but remembering those days always melts my heart.
</Typography>

                </Box>
            </Box>

        </Box>
        </>
    );
};

export default SSC;