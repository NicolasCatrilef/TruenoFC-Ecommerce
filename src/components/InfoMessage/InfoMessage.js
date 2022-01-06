import React, { useEffect, useState } from 'react'
import { Icon, Message } from 'semantic-ui-react'

import './InfoMessage.css'

export const InfoMessage = ({ type, order = '' }) => {

    const [icon, setIcon] = useState('');
    const [title, setTitle] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if ( type === 'item') {
            setIcon('box');
            setTitle('Producto No Encontrado');
            setMsg('Lamentamos informar que el producto seleccionado No existe.');
        }
        if ( type === 'order') {
            setIcon('check circle');
            setTitle('El N° de orden es :');
            setMsg(order);
        }

    }, [type])

    return (
        <div className='ItemList'>
            <Message icon className='message'>
                <Icon name={icon} />
                <Message.Content>
                    <Message.Header>{title}</Message.Header>
                    {msg}
                </Message.Content>
            </Message>
        </div>
    )
}
