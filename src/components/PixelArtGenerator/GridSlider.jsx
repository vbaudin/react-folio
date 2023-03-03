import { Box, Grid, Typography, Slider } from '@mui/material';
import MuiInput from '@mui/material/Input'
import * as React from 'react';
import { styled } from "@mui/material/styles"

const Input = styled(MuiInput)(() => ({
  width: "42px"
}))

const GridSlider = ({ title, value, setValue }) => {

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 1) {
      setValue(1)
    } else if (value > 32) {
      setValue(32)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 1}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={1}
            max={32}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 32,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default GridSlider;