
import React from 'react'
import {
    Typography, Card, CardContent, Box, Avatar

} from '@mui/material'



export const KpiCard = ({ title, value, unit, icon }) => {
    return (

        // agregar una animacion de loading si no esta listo para desplegarse el valor

        <Card sx={{ height: '100%' }}>

            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="overline"
                        color="text.secondary">
                        {title}
                    </Typography>

                    <Typography variant='h4'
                        color='textPrimary'>
                        {value}
                    </Typography>

                    <Typography variant="caption"
                        color="text.secondary"
                        sx={{ mt: 2 }}>
                        {unit}
                    </Typography>
                </Box>

                <Avatar sx={{width: 48, height: 48, backgroundColor: 'primary.main', color: 'text.primary'}}>
                    {icon}
                </Avatar>
            </CardContent>
        </Card>
    )
}
