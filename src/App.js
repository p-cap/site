import React from 'react';
import { Grid, ThemeProvider } from '@material-ui/core';

// components
import Pcap from './components/ui/Pcap';
import Bar from './components/ui/Bar';
import Einstein from './components/ui/Einstein';

// theme
import theme from './Theme/Theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
        >
          <Grid item>
                  <Pcap/>
          </Grid>
          <Grid item>
                  <Einstein />
          </Grid>
          <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
              <Bar/>
            </Grid>
          </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}


