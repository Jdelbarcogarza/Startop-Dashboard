
import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, CardActions, Divider, Link } from '@mui/material'
import NextLink from 'next/link'

export const AccountAddAdAccount = () => {
    return (
        <Card>
            <CardHeader
                title={'Cuentas adicionales'}
                subheader={'Conecta más cuentas de tus distintas redes para poder administrarlas'}
            />
            <Divider />

            <CardActions>
                <NextLink href={'/connectAdAccounts'}
                    passHref
                >
                    <Button variant="text"
                        color="primary"
                        fullWidth>
                        Conectar cuentas
                    </Button>
                </NextLink>
            </CardActions>
        </Card>
    )
}
