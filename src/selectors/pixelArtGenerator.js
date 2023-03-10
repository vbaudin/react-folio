import * as R from 'ramda'

export const selectPixelArtGenerator = R.prop('pixelArtGenerator')

export const selectMap = state => {
  const pag = selectPixelArtGenerator(state)
  return (pag.map)
}

export const selectColor = state => {
  const pag = selectPixelArtGenerator(state)
  return (pag.color)
}

export const selectEraseColor = R.pipe(selectPixelArtGenerator, R.prop('eraseColor'))
 