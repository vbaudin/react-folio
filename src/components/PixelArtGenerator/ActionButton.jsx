import * as React from 'react';
import { Button } from '@mui/material'

const ActionButton = ({ text, action }) => {
  return (
    <Button
      variant="outlined"
      onClick={action}
    >
      {text}
    </Button>
  )
}

export default ActionButton