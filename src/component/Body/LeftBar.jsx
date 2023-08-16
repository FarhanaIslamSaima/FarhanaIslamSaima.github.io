import React from 'react';
import { Box, Typography } from '@mui/material';
import pic from './assets/saima.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LeftBar = () => {
    return (
        <Box>
            <Box sx={{display:{sm:'flex',xs:'none'},flexDirection:'column', alignItems:'center'}} >
            <Box sx={{width:'200px',height:'200px',borderRadius:"50%",justifyContent:"center", marginTop:"40px",alignItems:'center'}}>
        <img src={pic} width={'100%'} height={'100%'} style={{borderRadius:"50%"}}/>
        
      </Box>
      <Typography sx={{fontWeight:"bold",fontSize:"22px",margin:'10px',borderBottom:'3px solid #7A9EF3',paddingBottom:"20px",marginBottom:'30px',}}>Farhana Islam</Typography>
      
    <Typography sx={{fontSize:'20px',marginBottom:'40px'}}>FULLSTACK DEVELOPER</Typography>
    <Box sx={{background:'white',display:'flex',justifyContent:"center",alignItems:'center',marginTop:'auto',padding:'10px',width:'800px','&>*':{
        margin:'10px',
        fontSize:'30px'
    }}}>
        <FacebookIcon>

        </FacebookIcon>
        <TwitterIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
    </Box>
        </Box>


        <Box sx={{display:{xs:'flex',sm:'none'},flexDirection:'column', alignItems:'center'}} >
            <Box sx={{width:'200px',height:'200px',borderRadius:"50%",justifyContent:"center", marginTop:"30px",alignItems:'center'}}>
        <img src={pic} width={'100%'} height={'100%'} style={{borderRadius:"50%"}}/>
        
      </Box>
      <Typography sx={{fontWeight:"bold",fontSize:"22px",margin:'10px',borderBottom:'3px solid #7A9EF3',paddingBottom:"20px",marginBottom:'30px',}}>Farhana Islam</Typography>
      
    <Typography sx={{fontSize:'20px'}}>FULLSTACK DEVELOPER</Typography>
    <Box sx={{display:"flex",marginTop:'10px',justifyContent:'center',alignItems:'center','&>*':{
          
          borderRadius:"20%",
          padding:'5px',
          display:'flex',
          justifyContent:"center",
          marginBottom:"10px",
          fontWeight:'bold',
          cursor:'pointer',
          width:'150px'
        }}}>
          <Typography sx={{background:'#0050FF',fontWeight:'bold',color:"white",border:'2px solid #0050FF',marginRight:'20px','&:hover':{
            background:'white',color:'black'
          }}}>Resume</Typography>
          <Typography sx={{border:'2px solid black', padding:"6px"}}>Projects</Typography>
        </Box>
    <Box sx={{background:'white',display:'flex',justifyContent:"center",alignItems:'center',marginTop:'20px',padding:'8px',width:'800px','&>*':{
        margin:'10px',
        fontSize:'30px'
    }}}>
        
        <FacebookIcon>

        </FacebookIcon>
        <TwitterIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
    </Box>
        </Box>

        </Box>
        
      
    );
};

export default LeftBar;