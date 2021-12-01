import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';


export const ItemListContainer = ({greetings}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.github.com/users')
                .then( resp => resp.json() )
                .then( json => setItems(json));
        }, 2000);
    }, [])

    return (
        <div className='container'>
            <ItemList items={items}/>
        </div>
        
    )
}
