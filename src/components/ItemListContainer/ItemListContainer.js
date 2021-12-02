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

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://api.github.com/users')
    //             .then( resp => resp.json() )
    //             .then( json => setItems(json));
    //     }, 2000);
    // }, []);

    return (
        <div className='container'>
            <ItemList items={items}/>
        </div>
        
    )
}
