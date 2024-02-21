import React, { useEffect, useState } from 'react';
import { Stack, TextField, Button, Backdrop, CircularProgress } from '@mui/material'
import { useInfo } from '../contex/useinfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import IconLabelButtons from '../components/enviar';

const Banco = () => {
    const [open, setOpen] = React.useState(false);
    const { account, password, form, onChangeInfo } = useForm({
        account: '',
        password: ''
    })
    console.log(form)
    const { updateinfo } = useInfo();
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleSubmit = async e => {
        handleOpen()
        try {
            e.preventDefault();
            const response = await axios.post("https://apibank.ikoodi.site/api/login", form ).then(
                console.log('se mando')
            );
            // setLoginData(response.data);
            updateinfo(response.data);
            navigate("/saldo")
            handleClose()
            //es el cargando
        } catch (error) {
            console.log(error)
            handleClose()
        }
    }




    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Stack>
                <TextField
                    name='account'
                    onChange={({ target: { value, name } }) => onChangeInfo(value, name)}
                    type='username'
                    value={account}
                />
                <TextField
                    name='password'
                    onChange={({ target: { value, name } }) => onChangeInfo(value, name)}
                    type='password'
                    value={password}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Login
                </Button>
            </Stack>
        </div>
    )
}

export default Banco;
