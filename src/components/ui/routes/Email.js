import React from 'react';
import { Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleText: {
    ...theme.titleText,
    [theme.breakpoints.down("md")]: {
      fontSize: "5.0rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.0rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.0rem"
    },
  },
  emailText: {
    color: "black",
    ...theme.otherFont,
    textShadow: "2px 2px #33EAFF",
    fontSize: "5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "4.0rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.0rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.85rem"
    },
  }
}))

export default function CallMe() {
  const classes = useStyles()

  return (
    <div>
      <br/>
      <br/>
      <br/>      
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={8}
        > 
          <Grid item>
              <Typography variant="h2" className={classes.titleText}>e-Mail</Typography>
          </Grid>
          <Grid item>
                <a href="mailto:slashedeye@yahoo.com">
                <Typography variant="h3" className={classes.emailText}>slashedeye@yahoo.com</Typography> 
                </a>     
          </Grid>
        </Grid>
      </div>
  )
}