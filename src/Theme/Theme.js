import {createMuiTheme } from '@material-ui/core/styles';

// colors
const neonGreen = "#39ff14"
const white = "#EDF5E1"
const cyan = "#33EAFF"
const lime = "#bfff00"
const almond = "#FFEBCD"

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Montserrat",
        ].join(','),
        h1: {
            fontWeight: 900
        },
        subtitle1: {
            fontSize: "1.5rem"
        }
    },
    palette: {
        primary: {
            main: neonGreen
        },
        secondary: {
            main: white
        }
    },
    pcapImage: {
        position: "relative",
        textAlign: "center",
        color: almond,
        width: "100%"
      },
    titleText: {
        color: white,    
        fontWeight: "650",
        fontSize: "5rem",
        textShadow: "2px 2px #33EAFF",
        fontFamily: "Permanent Marker",
      },
    overrides: {
        MuiInputBase: {
            input: {
                color: lime
            }
        },
        MuiTab: {
            wrapper: {
                color: cyan
            }
        },
        MuiTabs: {
            indicator: {
                backgroundColor: cyan
            }
        },
    },
    otherFont: {
        fontFamily: "Permanent Marker"
        },
    paperOpacity: {
        opacity: 0.9,
    }
})


export default Theme;