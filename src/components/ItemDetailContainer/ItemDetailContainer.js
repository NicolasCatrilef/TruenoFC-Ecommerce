import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFetch } from '../../Services/getFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const { id } = useParams();
    
    // const [items, setItems] = useState([]);
    const [item, setItem ] = useState({});

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://api.github.com/users')
    //         .then( resp => resp.json() )
    //         .then( json => setItems(json));
    //     }, 2000);
    // }, [])
    
    // const getItem = items.filter( item => item.id === Number(id));
    // const getItem1 = new Promise(( resolve, reject) => {
    //     setTimeout(() => {
    //         data ? resolve(data) : reject("Error")
    //     }, 2000);
    // })
    
    useEffect(() => {
        id ? getFetch.then( res => {setItem( res.find(item => item.id === parseInt(id)))})
                     .catch( err => console.log(err))
           : getFetch.then( res => {setItem( res )})
                     .catch( err => console.log(err))
    }, [id])

    return (
        <div className='container'> 
             <ItemDetail item={item}  />
        </div>
    )
}
