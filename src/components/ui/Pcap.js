import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    title: { 
        [theme.breakpoints.down('md')]: {
            fontSize: "5rem"
        }, 
        [theme.breakpoints.down('sm')]: {
            fontSize: "3.0rem"
        },    
        textShadow: "2px 2px #000000",
        ...theme.otherFont
    }, 
}))

export default function Pcap() {
    const isExtraSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"))

    const classes = useStyles()
    return (
        <div>
            { isExtraSmallScreen ? <Typography 
                                    className={classes.title} 
                                    variant="h1" 
                                    color="primary"
                                    align="center"
                                    >
                                    Paul <br/>"@P-cap" <br/>Capili</Typography>
                :
                <Typography 
                 className={classes.title} 
                 variant="h1" 
                 color="primary"
                 align="center"
                 >
                     Paul "@P-cap" Capili</Typography>
            }
        </div>
    )
}