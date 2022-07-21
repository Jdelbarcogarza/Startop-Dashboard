

import React from 'react'
import { AccountCard, ActionButtons } from './account-card'

/**
 * Componente que sirve como carta para cuentas que ya SE ENCUENTRAN CONECTADAS
 * y tienen dos botones como opciones para llevar a cabo una accion.
 */
export const AdAccountActionCard = ({ name, id }) => {
    return (
        <AccountCard
            name={name}
            id={id}>
            <ActionButtons />
        </AccountCard>
    )
}