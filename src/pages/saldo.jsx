import React, { useState } from 'react'
import { useInfo } from '../contex/useinfo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import './saldo.css';
import OutlinedCard from '../components/card';
import Badge from '@mui/material-next/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NestedModal from '../components/modal';

const saldo = () => {
  const[openmodal, SetOpenmodal] = useState(false)
   

  const { info } = useInfo();
  return (
    <Stack className='fondo' justifyContent="space-between">
      <Stack className='nav' direction={"row"}>
        <Typography variant="h6" gutterBottom>
          ID : {info?.user.id}
        </Typography>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
             Numero de cuenta : {info?.user.account}    
          </Typography>
        </Box>
      </Stack>
      <NestedModal/>
      <Stack className='infos' flexGrow="1">
      <Typography variant="h3" gutterBottom>
      Dinero : {info?.user.money}
        </Typography>
      </Stack>
    </Stack>

  )
}

export default saldo
