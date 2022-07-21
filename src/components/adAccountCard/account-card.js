import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export const AccountCard = ({ name, id, children }) => {
    return (
        <Card sx={{}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="subtitle1"
                        color="text.primary"
                        sx={{ fontWeight: '500' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2"
                        color="text.secondary">
                        ID: {id}
                    </Typography>
                </Box>

                {children}

            </CardContent>
        </Card>
    )
}

export const ConnectButton = () => {

    const [isAccountConnected, setIsAccountConnected] = useState(false)

    return (
        <Button variant={isAccountConnected ? "contained" : "outlined"}
            color="primary"
            startIcon={isAccountConnected && <DoneOutlinedIcon />}
            onClick={() => setIsAccountConnected(!isAccountConnected)}
            sx={{ width: '25%' }}
        >
            {isAccountConnected ? "Conectada" : "Conectar"}
        </Button>
    )
}

export const ActionButtons = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Button sx={{ mr: 4 }}
                variant="outlined">Configuracion</Button>
            <Button variant="contained">Ver reporte</Button>
        </Box>
    )
}