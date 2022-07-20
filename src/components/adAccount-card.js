
import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'

export const AdAccountCard = ({ name, id }) => {
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

                    <Box sx={{display: 'flex'}}>
                        <Button sx={{mr: 4}} 
                        variant="outlined">Configuracion</Button>
                        <Button variant="contained">Ver campañas</Button>
                    </Box>
                </CardContent>
            </Card>

    )
}
