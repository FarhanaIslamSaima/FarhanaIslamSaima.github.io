import React from 'react';
import {Box, Typography} from '@mui/material'

const HSC = () => {
    return (
        <>
        <Box sx={{display:{xs:'none',lg:"flex"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>2019-2022</Typography>
            <Box sx={{ width:"100%",display:"flex"}}>
            
                <Box sx={{width:"50%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Higher Secondary School Certificate</Typography>
                <Typography sx={{fontSize:'14px'}}>Holy Cross College</Typography>
                <Typography sx={{fontSize:'14px'}}>Dhaka</Typography>

                </Box>
                <Box sx={{width:"50%"}}>
                <Typography sx={{ color: 'grey', lineHeight: '30px' }}>
  I secured a GPA of 5.00 in the HSC exam. Due to the COVID-19 pandemic, we lost almost a year and had to sit for the HSC in 2022. 
  In short, we couldn’t attend college properly because of the pandemic and had to rely on online classes. 
  Maybe the only thing I'm truly happy about from my college life is that I met the most wholesome people there.
</Typography>

                </Box>
            </Box>

        </Box>

        <Box sx={{display:{xs:'flex',lg:"none"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>2019-2022</Typography>
            <Box sx={{ width:"100%",display:"flex",flexDirection:'column'}}>
            
                <Box sx={{width:"100%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Higher Secondary School Certificate</Typography>
                <Typography sx={{fontSize:'14px'}}>Holy Cross College</Typography>
                <Typography sx={{fontSize:'14px'}}>Dhaka</Typography>

                </Box>
                <Box sx={{width:"100%"}}>
                <Typography sx={{ color: 'grey', lineHeight: '30px' }}>
  I secured a GPA of 5.00 in the HSC exam. Due to the COVID-19 pandemic, we lost almost a year and had to sit for the HSC in 2022. 
  In short, we couldn’t attend college properly because of the pandemic and had to rely on online classes. 
  Maybe the only thing I'm truly happy about from my college life is that I met the most wholesome people there.
</Typography>

                </Box>
            </Box>

        </Box>
        </>
    );
};

export default HSC;