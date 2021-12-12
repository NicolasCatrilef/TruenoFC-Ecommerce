import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

//Context
import { CartContext } from '../Context/CartContext'


import './CardWidget.css'


export const CardWidget = () => {

    const [ items, setItems ] = useContext(CartContext);

    return (
        <>
            <Icon className='widget' inverted size='big' name='cart' />
            <p className='p'>( {items.length > 0 ? items.length : 0} )</p>
        </>
    )
}

