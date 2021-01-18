import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from "@material-ui/core";

//images
import Swift from '../../assets/Swift_logo.svg';
import Python from '../../assets/Python.svg';
import Javascript from '../../assets/Javascript.svg';
import Java from '../../assets/Java.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleText: {
   ...theme.titleText,
    [theme.breakpoints.down("md")]: {
      fontSize: "4.0rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.0rem"
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
    fontSize: "4rem"
  },
  images: {
    [theme.breakpoints.down("md")]: {
      height: "75px",
      width: "75px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      width: "70px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "65px",
      width: "65px"
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
            spacing={3}>
            <Grid item>
                  <Grid 
                    container="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    >                
                    <Paper className={classes.paper}>
                      <Box p={1}>
                        <a href="https://github.com/p-cap/resolution2021" style={{ textDecoration: 'none'}}>
                          <Grid item>
                                  <Grid 
                                    container
                                    justify="center"
                                    alignItems="center"
                                  >
                                      <img alt="Swift" src={Swift} className={classes.images}/>
                                      <img alt="Python" src={Python} className={classes.images} />
                                      <img alt="Javascript" src={Javascript} className={classes.images}/>
                                      <img alt="Java" src={Java} className={classes.images}/>
                                  </Grid>
                          </Grid>
                          <Grid item>
                                <Typography color="primary" align="center">
                                      <Typography className={classes.synopsisText}>Resolution 2021 </Typography><br/>
                                      Swift / SwiftUi mobile applications <br/>
                                      Data Structures and Algorithms with Python, Java and Javascript <br/>
                                      SYNOPSIS: This repo consists of small snippets of code for practice.
                                      Quantitative practice leads to qualitative results <br/>
                                </Typography>
                           </Grid>
                          </a>
                          </Box>
                        </Paper>
                   </Grid>
            </Grid>
            <Grid item>
            <Grid item>
                <Grid 
                    container
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Grid item>
                        <Paper className={classes.paper} >
                          <Typography 
                            color="primary" 
                            align="center"
                            className={classes.comingSoonText}
                            >
                            Coming Soon ;=)
                            </Typography>
                        </Paper>
                      </Grid> 
                  </Grid>
              </Grid>
            </Grid>
            <Grid item>
                <Grid 
                    container
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Grid item>
                        <Paper className={classes.paper} >
                          <Typography 
                            color="primary" 
                            align="center"
                            className={classes.comingSoonText}
                            >
                            Coming Soon ;=)
                            </Typography>
                        </Paper>
                      </Grid> 
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
    </div>
    )
}

