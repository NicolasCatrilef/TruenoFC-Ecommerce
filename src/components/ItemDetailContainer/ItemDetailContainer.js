import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getFetch } from '../../Services/getFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';


//FireBase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { InfoMessage } from '../InfoMessage/InfoMessage';


export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem ] = useState({});
    
    useEffect(() => {
        let products;
        
        if (id) {
            products = query(collection(db, "products"), where(documentId(), '==', id));
        } else {
            products = query(collection(db, "products"));
        }
        
        let docs = {};
        const getData = async () => {
            const querySnapshot = await getDocs(products);
            querySnapshot.forEach((doc) => {
                docs = {...doc.data(), id: doc.id}
            });
            setItem(docs);
        };
        getData();
    }, [id])

    return (
        <div className='ItemDetailContainer'> 
            {
                item.id ? (
                    <ItemDetail item={item}  />
                ) : (
                    <InfoMessage type='item'/>
                )
            }
        </div>
    )
}
