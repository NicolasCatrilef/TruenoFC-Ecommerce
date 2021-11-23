import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';



import './ItemListContainer.css';


export const ItemListContainer = ({greetings}) => {
    return (
        <div className='container'>
            {/* <Advertisement unit='banner' test={greetings} /> */}
            <ItemCount stock={10}/>

        </div>
        
    )
}
