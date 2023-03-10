import * as React from 'react';
import * as R from 'ramda'
import { Box, Slider, Typography, Button } from '@mui/material';
import GridSlider from './GridSlider';
import ActionButton from './ActionButton';
import ColorPicker from './ColorPicker';
import Painting from './Painting';
import { styled } from "@mui/material/styles"

import { useDispatch, useSelector } from 'react-redux'
import { updateMap, setEraseColor } from '../../ducks/pixelArtGenerator'
import { selectEraseColor } from '../../selectors/pixelArtGenerator'

const Wrapper = styled(Box)(() => ({
  width: "80vmin",
  padding: "40px 20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff"
}))

const OptionsWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px"
}))

const PixelArtGenerator = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(1)
  const [height, setHeight] = React.useState(1)
  const eraseColor = useSelector(selectEraseColor)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseDown = () => {
    setIsMouseDown(true)
  }

  const isEraseActive = !R.isNil(eraseColor)

  return (<>
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <OptionsWrapper>
        <GridSlider 
          title="Grid Width"
          value={width}
          setValue={setWidth}
        />
        <GridSlider 
          title="Grid Height"
          value={height}
          setValue={setHeight}
        />
      </OptionsWrapper>
      <OptionsWrapper>
        <ActionButton 
          text="Create Grid"
          action={() => {
            const newGrid = R.times(() => R.times(() => '#ffffff', width), height)
            dispatch(updateMap(newGrid))
          }}
        />
        <ActionButton 
          text="Clear Grid"
          action={() => dispatch(updateMap([]))}
        />
        <ColorPicker />
        <ActionButton 
          text="Paint"
          isActive={!isEraseActive}
          action={() => isEraseActive ? dispatch(setEraseColor()) : undefined}
        />
        <ActionButton 
          text="Erase"
          isActive={isEraseActive}
          action={() => !isEraseActive ? dispatch(setEraseColor()) : undefined}
        />
      </OptionsWrapper>
      <Painting 
        // action={action}
        mouseState={isMouseDown}
      />
    </Wrapper>
  </>)
}

export default PixelArtGenerator;