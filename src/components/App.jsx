import React from 'react';
import { useSelector } from 'react-redux';
import { selectTab } from '../selectors/app';
import { HOMEPAGE, PIXELARTGENERATOR } from '../constants';

import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

import Header from './Header';
import Home from './Home'
import PixelArtGenerator from './PixelArtGenerator/Main'

const StyledDisplayer = styled(Box)(() => ({
  background: "grey",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}))

const App = () => {
  const tab = useSelector(selectTab);

  return (
    <Box sx={{ }}>
      <Container disableGutters maxWidth={false}>
        <Header />
        <StyledDisplayer>
          {
            (() => {
              switch (tab) {
                case HOMEPAGE:
                  return <Home />
                case PIXELARTGENERATOR:
                  return <PixelArtGenerator />
                default:
                  return null
              }
            })()
          }
        </StyledDisplayer>
      </Container>
    </ Box>
);
}

export default App;
