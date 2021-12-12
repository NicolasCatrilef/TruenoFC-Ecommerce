import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

//Aux
import { getFetch } from '../../Services/getFetch';

//Components & Css
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';


export const ItemListContainer = ({greetings}) => {

    const [items, setItems] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        category ? 
            getFetch.then((result) => {
                setItems( result.filter( i => i.type === category ));
            }).catch((err) => {
                console.log(err)
            })
        :
            getFetch.then((result) => {
                setItems(result)
            }).catch((err) => {
                console.log(err)
            })
    }, [category])

    return (
        <div className='ItemListContainer'>
            <ItemList items={items}/>
        </div>
        
    )
}
