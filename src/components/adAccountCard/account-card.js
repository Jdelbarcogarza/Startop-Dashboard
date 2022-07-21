import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import PropTypes from 'prop-types'


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

/**
 * Componente que tiene dos botones los cuales al hacer click realizan una acción.
 * BOTÓN 1) La primera es acceder al dashboard para esa cuenta de anuncios
 * BOTÓN 2) [PENDIENTE]
 * 
 */
export const ActionButtons = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Button sx={{ mr: 4, width: '50%' }}
                variant="outlined"
                >
                Configuracion
                </Button>
            <Button variant="contained"
            sx={{width: '50%'}}
            >Ver reporte</Button>
        </Box>
    )
}

/** 
 * Uno de los dos componentes hijos de la ad account card. Este boton se
 * utilza para conectar o desconectar la ad account en un inicio de algun usuario.
 */
export const ConnectButton = () => {

    const [isAccountConnected, setIsAccountConnected] = useState(false)

    return (
        <Button variant={isAccountConnected ? "contained" : "outlined"}
            color="primary"
            startIcon={isAccountConnected && <DoneOutlinedIcon />}
            onClick={() => setIsAccountConnected(!isAccountConnected)}
            size="large"
            sx={{ width: '25%' }}
        >
            {isAccountConnected ? "Conectada" : "Conectar"}
        </Button>
    )
}


AccountCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}