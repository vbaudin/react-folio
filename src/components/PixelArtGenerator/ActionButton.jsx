import * as React from 'react';
import { Button } from '@mui/material'

const ActionButton = ({ text, action, isActive }) => {
  return (
    <Button
      variant={isActive ? "contained": "outlined"}
      onClick={action}
    >
      {text}
    </Button>
  )
}

export default ActionButton