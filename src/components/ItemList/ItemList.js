import React from 'react'
import PropTypes from 'prop-types';
import { Item } from '../Item/Item';

import '../ItemList/ItemList.css'

export const ItemList = ({items}) => {
    return (
        <div className='ItemList'>
            <div className='Item'>
                {
                    items.map( item => {
                        return <Item key={ item.id }  item={ item }/>
                    })
                }
            </div>
        </div>
    )
}

ItemList.prototype = {
    items: PropTypes.array.isRequired
}