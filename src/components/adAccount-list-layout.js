

import React from 'react'
import { Box, Stack } from '@mui/material'


export const AdAccountListLayout = ({ children }) => {
    return (

        <Box sx={{ px: 2, pr: 4, mt: 6, display: 'flex', justifyContent: 'center' }}>
            <Stack gap={4}
                sx={{ width: '60%' }}>
                {children}
            </Stack>
        </Box>

    )
}
