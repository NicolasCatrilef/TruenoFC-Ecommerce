import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

//Aux
import { getFetch } from '../../Services/getFetch';

//FireBase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

//Components & Css
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';


export const ItemListContainer = ({greetings}) => {

    const [items, setItems] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        let products;
        
        if (category) {
            products = query(collection(db, "products"), where('type', '==', category));
        } else {
            products = query(collection(db, "products"));
        }
        const docs = [];
        const getData = async () => {
            const querySnapshot = await getDocs(products);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItems(docs);
        };
        getData();
    }, [category])

    return (
        <div className='ItemListContainer'>
            <ItemList items={items}/>
        </div>
        
    )
}
