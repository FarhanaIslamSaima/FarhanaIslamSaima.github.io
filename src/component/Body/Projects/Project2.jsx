import React from 'react';
import { useState } from 'react';
import { Card,Box, Typography, Button,Dialog } from '@mui/material';
import pic from './assets/project1.png'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'

const Project2 = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (

        <>
        <Dialog open={open}
    
    BackdropProps={{
        style: {
          backgroundColor: 'rgba(0,0,0,0.2)',
          boxShadow: 'none',
        },
      }}
        >
            <Box sx={{height:'800px',width:"100%",}}>
                <Box sx={{padding:'5px',display:{xs:'none',lg:'block'}}}>
                    <CloseIcon sx={{marginLeft:'auto',float:'right',fontSize:'30px',cursor:'pointer' } } onClick={handleClose}  />
                    <Box sx={{padding:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img src={"/Project2.png"} style={{objectFit:'contain'}} height={'100%'} width={'100%'}/>
                    </Box>
                    <Typography sx={{fontStyle:'italic',marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}>ASSR Website</Typography>
                    <Typography sx={{lineHeight:'25px',color:'grey',fontSize:"16px"}}>
                    The Astronomy Club website for RUET is a platform designed to connect students and faculty with the wonders of astronomy. It showcases the club's activities, upcoming events, and provides resources for stargazing and learning about space science. The site serves as a hub for like-minded individuals to collaborate, share knowledge, and participate in astronomy-related events, fostering a community of enthusiasts at RUET.

                    </Typography>
                    <Box sx={{ marginTop:'10px','&>*':{
                        marginBottom:"10px"
                    }}}>
                    <Typography ><b>Technology Used: </b>Next Js, Tailwind,Prisma</Typography>
                    <Typography><b>Website Link:</b><Link to={"https://assr-rho.vercel.app/"}> https://assr-two.vercel.app/</Link></Typography>
                    

                    </Box>
                    

                    </Box>
                   
                </Box>
                <Box sx={{width:'100%',display:{xs:'block',lg:'none',padding:'10px'}}}>
                    <CloseIcon sx={{marginLeft:'auto',float:'right',fontSize:'30px',cursor:'pointer' } } onClick={handleClose}  />
                    <Box sx={{padding:'10px'}}>
                    <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img src={"/Project2.png"} style={{objectFit:'contain'}} height={'100%'} width={'100%'}/>
                    </Box>
                    <Typography sx={{fontStyle:'italic',marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}>ASSR Website</Typography>
                    <Typography sx={{lineHeight:'25px',color:'grey',fontSize:"16px"}}>
                    The Astronomy Club website for RUET is a platform designed to connect students and faculty with the wonders of astronomy. It showcases the club's activities, upcoming events, and provides resources for stargazing and learning about space science. The site serves as a hub for like-minded individuals to collaborate, share knowledge, and participate in astronomy-related events, fostering a community of enthusiasts at RUET.

                    </Typography>
                    <Box sx={{ marginTop:'10px','&>*':{
                        marginBottom:"10px"
                    }}}>
                    <Typography ><b>Technology Used: </b>Next Js, Tailwind,Prisma</Typography>
                    <Typography><b>Website Link:</b><Link to={"https://assr-two.vercel.app/"}> https://assr-two.vercel.app/</Link></Typography>
                    

                    </Box>
                    

                    </Box>
                   
                </Box>
               

            </Box>

        </Dialog>
        <Card sx={{width:'450px',margin:"10px"}}>
            <Box sx={{objectFit:'cover'}}>
                <img src={"/Project2.png"} width={'100%'} height={'100%'} style={{objectFit:'contain'}}/>
            </Box>
            <Box sx={{padding:'6px','&>*':{
                padding:'6px'
            }}}>
                <Typography sx={{fontStyle:'italic',fontWeight:'bold'}}>ASSR Website</Typography>
                <Button color='primary' variant='contained' sx={{paddingTop:'10px',paddingBottom:'10px'}}onClick={handleOpen}>View Details</Button>
            </Box>

        </Card>
        </>
    );
};

export default Project2;