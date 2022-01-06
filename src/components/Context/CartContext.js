import React, { createContext, useState } from 'react'


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
            img: item.img
        }

        if ( items.length > 0 ) {
            let exist = items.find( i => i.id === newItem.id);
            if (exist) {
                // exist.quantity = exist.quantity + quantity;
                let products = items.map( (data) => {
                    if (data.id === newItem.id) {
                        data.quantity = data.quantity + quantity;
                        return { ...data };
                    }
                    return { ...data };
                })
                setItems(products);
            } else {
                setItems(items.concat(newItem));
            }
        }else{
            setItems(items.concat(newItem));
        }
    };

    const removeItem = (itemId) => {
        const itemRemoved = items.filter( i => i.id !== itemId );
        setItems(itemRemoved);
    };
    
    const clear = () => {
        setItems([]);
    };

    return(
        <CartContext.Provider value={[items, setItems, addItem, removeItem, clear]}>
            {children}
        </CartContext.Provider>
    );
};
