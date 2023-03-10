import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../ducks/pixelArtGenerator'
import { selectColor } from '../../selectors/pixelArtGenerator'

const ColorPicker = () => {

  const dispatch = useDispatch()
  const color = useSelector(selectColor);

  return (
    <MuiColorInput format="hex" value={color} onChange={(newColor) => dispatch(setColor(newColor))} />
  )
}

export default ColorPicker