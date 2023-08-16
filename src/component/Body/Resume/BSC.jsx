import React from 'react';
import {Box, Typography} from '@mui/material'

const BSC = () => {
    return (
        <>
        <Box sx={{display:{xs:'none',lg:"flex"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>PRESENT</Typography>
            <Box sx={{ width:"100%",display:"flex"}}>
            
                <Box sx={{width:"50%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>BSC in Electrical & Computer Enginnering</Typography>
                <Typography sx={{fontSize:'14px'}}>Rajshahi University Of Engineering & Technology</Typography>
                <Typography sx={{fontSize:'14px'}}>Rajshahi</Typography>

                </Box>
                <Box sx={{width:"50%"}}>
                    <Typography sx={{color:'grey',lineHeight:'30px'}}>
                    I've always wanted to pursue a degree in computer related subject. Right now I'm in my first year in ECE. On my way to make my dream come true. Looking forward to learning many intersting staffs and make my 4 years journey memorable...
                    </Typography>

                </Box>
            </Box>

        </Box>

        <Box sx={{display:{xs:'flex',lg:"none"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>PRESENT</Typography>
            <Box sx={{ width:"100%",display:"flex",flexDirection:'column'}}>
            
                <Box sx={{width:"100%",'&>*':{
                    paddingBottom:'7px'
                }}}>
                
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>BSC in Electrical & Computer Enginnering</Typography>
                <Typography sx={{fontSize:'14px'}}>Rajshahi University Of Engineering & Technology</Typography>
                <Typography sx={{fontSize:'14px'}}>Rajshahi</Typography>

                </Box>
                <Box sx={{width:"100%"}}>
                <Typography sx={{color:'grey',lineHeight:'30px'}}>
                    I've always wanted to pursue a degree in computer related subject. Right now I'm in my first year in ECE. On my way to make my dream come true. Looking forward to learning many intersting staffs and make my 4 years journey memorable...
                    </Typography>

                </Box>
            </Box>

        </Box>
        </>
    );
};

export default BSC;