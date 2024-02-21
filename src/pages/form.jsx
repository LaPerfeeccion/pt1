import React, { useState } from 'react'
import { Stack, Button, Box, Container, Checkbox, Autocomplete, TextField, Rating, Typography, colors, Grid } from '@mui/material'
import ButtonGroup from '@mui/material-next/ButtonGroup';
import GroupAvatars from '../components/icons';
import BasicRating from '../components/BasicRating';
import IconLabelButtons from '../components/enviar';
import './form.css';

const form = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [btnstate, setbtnstate] = useState(false);
  const toptwitch = [
    { label: 'Horcus', year: 2024 },
    { label: 'Kerios ', year: 2023 },
    { label: 'Annied', year: 30000 },
    { label: 'Yeri MUA', year: 2024 },
    { label: 'Jezziplaytv', year: 2023 },
    { label: "Cry", year: 2023 },
    { label: 'Nissaxter', year: 2022 },
  ]
  const topcanciones = [
    { label: 'friends', year: 2024 },
    { label: 'Chupon ', year: 2023 },
    { label: 'K/DA More', year: 30000 },
    { label: 'the baddest', year: 2024 },
    { label: 'Greedy', year: 2023 },
    { label: "You broke me first", year: 2023 },
    { label: 'Fiebre-', year: 2022 },
  ]
  return (
    <Stack className='main' direction="row">
      <Stack className="welcome" direction="column" justifyContent="center" alignItems="center">
        <Typography sx={{ color: "white", fontFamily: "initial" }} variant="h5" gutterBottom>
          Welcome To
        </Typography>
        <GroupAvatars/>
        <Typography sx={{ color: "white", marginTop: "10px" }} variant="body2" gutterBottom>
          Esperamos tu votacion
        </Typography>
      </Stack>
      <Stack direction="column" justifyContent="center" className='container glass'>
        <GroupAvatars/>
        <Typography sx={{ color: "black", fontFamily: "initial" }} variant="h5" gutterBottom>
          Top Streamer
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={toptwitch}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Fav Streamer" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={topcanciones}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Fav Music" />}
        />
        <BasicRating />
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography sx={{ color: "black", marginTop: "10px" }} variant="body2" gutterBottom>
            Recibir correos
          </Typography>
          <Checkbox {...label} defaultChecked />
          <IconLabelButtons/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default form