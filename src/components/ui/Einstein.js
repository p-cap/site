import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    einsteinText: {
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.50rem"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.0rem"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem"
      },
    },
}))

export default function Einstein() {
    const classes = useStyles()
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

    return (
        <div>
            <Typography 
                variant="subtitle1" 
                color="secondary" 
                className={classes.einsteinText}
                align="center"
                >
                { isSmallScreen ? 
                    <div>"We cannot solve our problems with the same thinking <br /> we used when we created them"</div>:
                    <div>We cannot solve our problems with the same thinking we used when we created them"</div>
                }    
            </Typography>
            <Typography 
                variant="subtitle1" 
                color="secondary" 
                align="center"
                className={classes.einsteinText}
                >
                    - Albert Einstein
            </Typography>
        </div>
    )
}