import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

//Context
import { CartContext } from '../Context/CartContext'


import './CardWidget.css'


export const CardWidget = () => {

    const [ items, setItems ] = useContext(CartContext);
    const quantity = items.reduce((totalCart, item) => totalCart + item.quantity, 0);

    return (
        <>
            <Icon className='widget' inverted size='big' name='cart' />
            <p className='p'>( {items.length > 0 ? quantity : 0} )</p>
        </>
    )
}

