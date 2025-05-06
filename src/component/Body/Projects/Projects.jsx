import React from 'react';
import {Grid} from '@mui/material'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4.jsx';

const Projects = () => {
    return (
       <Grid container  spacing={3} >
        <Grid item xs={12} lg={4} sm={12}>
            <Project1></Project1>
           
            </Grid>
            <Grid item xs={12} lg={4} sm={12} >
            <Project2></Project2>
           
            </Grid>
            <Grid item xs={12} lg={4} sm={12}>
            <Project3></Project3>
           
            </Grid>
            <Grid item >
            
            <Project4></Project4>
            </Grid>

       </Grid>
    );
};

export default Projects;