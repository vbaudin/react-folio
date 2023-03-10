import React from 'react'
import * as R from 'ramda';
import { useDispatch, useSelector } from 'react-redux'
import { selectMap } from '../../selectors/pixelArtGenerator';
import { setPeint } from '../../ducks/pixelArtGenerator';

const Painting = ({ mouseState }) => {
  const dispatch = useDispatch();
  const map = useSelector(selectMap)
  
  return (
    <table>
      <tbody>
        {map.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((cell, j) => (
              <td 
                key={`cell-${i}-${j}`} 
                style={{ height: "1em", width: "1em", border: "1px solid #ddd", backgroundColor: map[i][j] }}
                onClick={() => dispatch(setPeint(i, j))}
                // onMouseOver={(() => mouseState ? dispatch(setPeint(i, j)) : null)}
              >
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Painting;