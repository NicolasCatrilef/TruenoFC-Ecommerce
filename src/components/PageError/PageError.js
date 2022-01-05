import React from 'react'
import { Image, Message } from 'semantic-ui-react'

import './PageError.css';
import errorImg from './error-404-not-found.jpg'

export const PageError = () => {
    return (
        <div className='error'>
            <Image src={errorImg} size='big' />
            <Message icon className='message' error>
                <Message.Content>
                    <Message.Header>Página no Encontrada</Message.Header>
                    Lamentamos el incoveniente, pero no pudimos acceder a la página solicitada.
                </Message.Content>
            </Message>
        </div>
    )
}
