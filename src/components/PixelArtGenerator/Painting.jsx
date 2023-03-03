import React from 'react'
import * as R from 'ramda'

const Painting = ({ tab, action, mouseState }) => {
  return (
    <table>
      <tbody>
        {tab.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((cell, j) => (
              <td 
                key={`cell-${i}-${j}`} 
                style={{ height: "1em", width: "1em", border: "1px solid #ddd", backgroundColor: tab[i][j] }}
                onMouseDown={() => action(i, j)}
                onMouseOver={(() => mouseState ? action(i, j) : null)}
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