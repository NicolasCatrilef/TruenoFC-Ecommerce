import React from 'react'
import { Advertisement } from 'semantic-ui-react'

import './ItemListContainer.css';


export const ItemListContainer = ({greetings}) => {
    return (
        <div className='container'>
            <Advertisement unit='banner' test={greetings} />
        </div>
        
    )
}
