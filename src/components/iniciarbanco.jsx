import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function Props() {
  return (
    <Stack className='dark'>
      <Box
       component="Banco.css"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Acount-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        </div>
    </Box>
    </Stack>
    
     
  );
}

