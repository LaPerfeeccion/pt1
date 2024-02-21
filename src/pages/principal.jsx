import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import './principal.css'
import { useNavigate } from 'react-router-dom';
const principal = () => {

  const navigate = useNavigate();

  const registrar = () => {
    navigate("/new")
    console.log("hola"
    )
  }

  return (
    <Stack className='l'>
        <Stack className='tx'>
      <Typography sx={{ color: "white", fontFamily: "initial" }} variant="h5" gutterBottom>
          Bienvenidos a la votacion oficial para el mejor Streamer
        </Typography>
    </Stack>
      <Button variant="outlined" onClick={() => registrar()}>Enviar</Button>
    </Stack>
    
)}

export default principal