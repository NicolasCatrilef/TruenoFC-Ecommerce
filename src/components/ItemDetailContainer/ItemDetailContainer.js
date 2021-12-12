import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFetch } from '../../Services/getFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const { id } = useParams();
    
    const [item, setItem ] = useState({});
    
    useEffect(() => {
        id ? getFetch.then( res => {setItem( res.find(item => item.id === parseInt(id)))})
                     .catch( err => console.log(err))
           : getFetch.then( res => {setItem( res )})
                     .catch( err => console.log(err))
    }, [id])

    return (
        <div className='ItemDetailContainer'> 
             <ItemDetail item={item}  />
        </div>
    )
}
