import * as React from 'react';
import * as R from 'ramda'
import { Box, Slider, Typography, Button } from '@mui/material';
import GridSlider from './GridSlider';
import ActionButton from './ActionButton';
import ColorPicker from './ColorPicker';
import Painting from './Painting';
import { styled } from "@mui/material/styles"

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

const setPaint = (setAction, tab, color, setTab) => {
  console.log(color)
  setAction(() => (x, y) => {
    console.log("On va colorier la case " + x + " " + y + " en " + color), color
    const newCellColor = [...tab]
    newCellColor[x][y] = color
    setTab(newCellColor)
  })
}

const PixelArtGenerator = () => {
  const [width, setWidth] = React.useState(1)
  const [height, setHeight] = React.useState(1)
  const [color, setColor] = React.useState('#ffffff')
  const [tab, setTab] = React.useState([])
  const [action, setAction] = React.useState(() => () => null)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseDown = () => {
    setIsMouseDown(true)
  }

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
            console.log(newGrid)
            setTab(newGrid)
          }}
        />
        <ActionButton 
          text="Clear Grid"
          action={() => setTab([])}
        />
        <ColorPicker 
          color={color}
          setColor={setColor}
        />
        <ActionButton 
          text="Erase"
          action={() => setPaint(setAction, tab, "#ffffff", setTab)}
        />
        <ActionButton 
          text="Paint"
          action={() => setPaint(setAction, tab, color, setTab)}
        />
      </OptionsWrapper>
      <Painting 
        tab={tab}
        action={action}
        mouseState={isMouseDown}
      />
      <Button
        variant="outlined"
        onClick={() => {
          console.log("Width : " + width)
          console.log("Height : " + height)
          console.log("Color : " + color)
          // console.log("Tab : " + tab)
        }}
      >
        States Test
      </Button>
    </Wrapper>
  </>)
}

export default PixelArtGenerator;