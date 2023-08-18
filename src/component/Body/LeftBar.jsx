import React from 'react';
import { Box, Typography } from '@mui/material';
import pic from './assets/saima.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <Box>
            <Box sx={{display:{sm:'flex',xs:'none'},flexDirection:'column', alignItems:'center'}} >
            <Box sx={{width:'200px',height:'200px',borderRadius:"50%",justifyContent:"center", marginTop:"40px",alignItems:'center'}}>
        <img src={pic} width={'100%'} height={'100%'} style={{borderRadius:"50%"}}/>
        
      </Box>
      <Typography sx={{fontWeight:"bold",fontSize:"22px",borderBottom:'3px solid #7A9EF3',paddingBottom:"20px",marginBottom:'30px',}}>Farhana Islam</Typography>
      
    <Typography sx={{fontSize:'20px',marginBottom:'40px'}}>FULLSTACK DEVELOPER</Typography>
    <Box sx={{background:'white',display:'flex',justifyContent:"center",alignItems:'center',marginTop:'auto',width:'800px','&>*':{
        margin:'10px',
        fontSize:'30px'
    }}}>
         <Link to={"https://www.facebook.com/farhana.saima.52"}> <FacebookIcon sx={{color:"black"}}></FacebookIcon></Link>
        <Link to={"https://twitter.com/Farhana61267022"}><TwitterIcon sx={{color:"black"}}/></Link>
        <Link to={"https://www.instagram.com/farhana.saima.52"}><InstagramIcon sx={{color:"black"}}/></Link>
        <Link to={"https://www.linkedin.com/in/farhana-islam-9190721b1/"}><LinkedInIcon sx={{color:"black"}}/></Link>
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
         <Link to={'/resume'} style={{textDecoration:'none'}}>
          <Typography sx={{background:'#0050FF',borderRadius:"20%",fontWeight:'bold',padding:'5px', display:'flex',
          justifyContent:"center", width:'250px',color:"white",border:'2px solid #0050FF','&:hover':{
            background:'white',color:'black',
            
          }}}>Resume</Typography>
          
          
          
          </Link>
          <Link to={'/project'} style={{textDecoration:'none'}}>
          <Typography sx={{background:'white',color:'black',borderRadius:"20%",fontWeight:'bold',padding:'5px', display:'flex',
          justifyContent:"center", width:'250px',color:"black",border:'2px solid black','&:hover':{
            background:'#0050FF',color:'white',
            
          }}}>Projects</Typography>
          
          </Link>
        </Box>
    <Box sx={{background:'white',display:'flex',justifyContent:"center",margin:"10px",alignItems:'center',padding:'10px',marginTop:'10px',padding:'5px',width:'800px','&>*':{
        margin:'10px',
        fontSize:'30px'
    }}}>
        
       

        <Link to={"https://www.facebook.com/farhana.saima.52"}> <FacebookIcon sx={{color:"black"}}></FacebookIcon></Link>
        <Link to={"https://twitter.com/Farhana61267022"}><TwitterIcon sx={{color:"black"}}/></Link>
        <Link to={"https://www.instagram.com/farhana.saima.52"}><InstagramIcon sx={{color:"black"}}/></Link>
        <Link to={"https://www.linkedin.com/in/farhana-islam-9190721b1/"}><LinkedInIcon sx={{color:"black"}}/></Link>
    </Box>
        </Box>

        </Box>
        
      
    );
};

export default LeftBar;