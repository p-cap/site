import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from "@material-ui/core";

// Project titles
import ProjectTitles, { Images } from '../../Info/ProjectTitles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleText: {
   ...theme.titleText,
    [theme.breakpoints.down("md")]: {
      fontSize: "4.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.0rem"
    },
  },

  paper: {
    height: 400,
    width: 400,
    backgroundColor: "black",
    ...theme.paperOpacity,
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },

  synopsisText: {
    ...theme.otherFont,
    fontSize: "2rem"
  }, 

  comingSoonText: {
    ...theme.otherFont,
    fontSize: "3rem"
  },
  images: {
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "200px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      width: "200px"
    },
  }
}));

export default function Projects() {
  const classes = useStyles();
  const isExtraSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <br/>
      <br/>
      <br/>
    <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
            <Grid item>
              <Typography 
                variant="h2" 
                className={classes.titleText}
                >
                  Projects</Typography>
            </Grid>
            <Grid item>
              <Grid 
                container
                direction={isExtraSmallScreen ? "column": "row"}
                justify="center"
                alignItems="center"
                spacing={4}>
                   { ProjectTitles.map((title, index) => (
                        <Grid item key={index}>
                            <Grid
                              container
                              justify="center"
                              alignItems="center"
                            >
                              <Paper className={classes.paper} >
                                <Grid item>
                                  <Typography 
                                    color="primary" 
                                    align="center"
                                    className={classes.comingSoonText}
                                    > {title}
                                  </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Grid 
                                      container
                                      justify="center"
                                      alignItems="center"
                                      >
                                      <Box p={3}>
                                        { (title === "Data Structure and Algo") ? 
                                              <a href="https://github.com/p-cap/algo-data-structures">
                                                 <img alt="Data Structure and Aglo with Python" src={Images[index]} className={classes.images}/>
                                              </a> 
                                           : (title === "Swift/UI") ? 
                                              <a href="https://github.com/p-cap/Swift-SwiftUI">
                                                <img alt="IOS development" src={Images[index]} className={classes.images}/>
                                              </a> 
                                              :
                                              <img alt="The rest for now" src={Images[index]} className={classes.images}/>
                                          }
    
                                      </Box>
                                    </Grid>
                                  </Grid>
                            </Paper>
                        </Grid>
                      </Grid> 
                    ))}
                  </Grid>
              </Grid>
            </Grid>
  

    </div>  
    )
}

