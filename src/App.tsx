import * as React from 'react';
import { Box, Grid } from '@material-ui/core';
import CharacterGrid from './Components/CharacterList/CharacterList';
import CharacterCard from './Components/CharacterCard/CharacterCard';
import AcrylicBackgroud from './Components/AcrylicBackground/AcrylicBackgroud'

import SearchBar from './Components/SearchBar/SearchBar';


function App() {

  return (
    <>
      <AcrylicBackgroud />
      <Grid
        container
        style={{ height: '100vh', zIndex: 888 }}
        justify="center"
        alignItems="center"
      >
        <Grid
          style={{ height: '90vh' }}
          container
          justify="center"
        >
          <Grid container direction="column" style={{ background: 'rgba(255,255,255, 0.6)', padding: 10, borderRadius: '10px 0 0 10px' }} xs={12} sm={6} lg={4} >
            <Grid container justify="center">
              <SearchBar />
            </Grid>
            <Box style={{ height: '70vh', overflowY: 'auto' }}>
              <CharacterGrid />
            </Box>
          </Grid>
          <Grid style={{ background: 'white', overflow: 'hidden' ,borderRadius: '0 10px 10px 0' }} xs={12} sm={6} lg={5} >
            <CharacterCard />
          </Grid>
        </Grid>
      </Grid>
    </>

  );
}

export default App;
