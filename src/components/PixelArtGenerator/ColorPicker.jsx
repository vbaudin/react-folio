import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const ColorPicker = ({ color, setColor }) => {
  const handleChange = newValue => setColor(newValue)

  return (
    <MuiColorInput format="hex" value={color} onChange={handleChange} />
  )
}

export default ColorPicker