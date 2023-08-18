import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Face3Icon from '@mui/icons-material/Face3';
import SquareIcon from '@mui/icons-material/Square';
import { motion, sync, useCycle } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.9,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const [isOpen, toggleOpen] = React.useState(false);
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClose=()=>{
    setMobileOpen(false);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',cursor:'pointer' }}>
      <Box onClick={handleDrawerToggle}>
      <CloseIcon sx={{float:'right',fontSize:'40px',cursor:"pointer"}} />

      </Box>
      
      
   
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' ,'&>*':{
              fontSize:'30px',fontWeight:'bold'
            }}}>
              <ListItemText primary={item} sx={{fontSize:'30px',fontWeight:'bold'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"white",color:"black",boxShadow:'none',height:'100px',display:"flex",justifyContent:"center"}}>

        <Toolbar>
        
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } ,flexDirection:'row',alignItems:'center'}}
          >
          <Typography sx={{fontWeight:'bold',fontSize:'20px',display:'flex',alignItems:'center'}}><SquareIcon sx={{color:'blue',marginRight:'10px'}}/> Farhana Islam /</Typography>
          <Link to={"/"} style={{textDecoration:'none'}}><Typography sx={{fontSize:"20px",color:'grey',fontWeight:'lighter'}}>FullStack Developer</Typography></Link>

          </Typography>
         
          <Typography sx={{flexGrow:1,display:{sm:'none'}}}>
          <Typography sx={{fontWeight:'bold',fontSize:'20px',display:'flex',alignItems:'center'}}><SquareIcon sx={{color:'blue',marginRight:'10px'}}/> Farhana Islam</Typography>
          <Link to={"/"} style={{textDecoration:'none'}}><Typography sx={{fontSize:"20px",color:'grey',fontWeight:'lighter'}}>FullStack Developer</Typography></Link>
          </Typography>
       
          <IconButton
           
            onClick={handleDrawerToggle}
            fontSize={'large'}
            sx={{  display: {  sm:'none'}, fontSize:'large',fontWeight:'bold',color:"blue"}}
            
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </AppBar>
      <Box>
       
      <Box component="nav" >
      
          <Drawer
         container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
         sx={{
           
           display: { xs: 'flex' },
           
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%',display:'flex' },
           
         }}
       >
         {drawer}
       </Drawer>

        
       
       
  
       
     </Box>


      </Box>
     
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
