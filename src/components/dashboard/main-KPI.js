
import React from 'react'
import {
    Typography, Card, CardContent, Box

} from '@mui/material'

import TimelineIcon from '@mui/icons-material/Timeline';


export const MainKPI = (props) => {
    return (

        <Card sx={{ height: '100%' }}
            {...props}>

            <CardContent sx={{display:'flex', alignItems: 'center', justifyContent: 'space-around'}}>

                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="overline"
                        color="textSecondary">
                        Alcance
                    </Typography>

                    <Typography variant='h4'
                        color='textPrimary'>
                        40,296
                    </Typography>

                    <Typography variant="caption"
                        color="textSecondary">
                        Personas
                    </Typography>
                </Box>

                    <TimelineIcon fontSize='large' />
            </CardContent>
        </Card>
    )
}
