
import React from 'react'
import { AccountCard, ConnectButton } from './account-card'

/**
 * Componente que sirve como carta para conectar cuentas de anuncios (Ad Accounts)
 * y tiene como componente secundario el botón de conectar
 */
export const ConnectAdAccountCard = ({ name, id }) => {
    return (
        <AccountCard
            name={name}
            id={id}>
            <ConnectButton />
        </AccountCard>
    )
}
