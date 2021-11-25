import React from 'react'
import './Header.css'

//Imagen Corporativa
import img from '../Header/Trueno-FC.png'

export const Header = () => {
    return (
        <div className='Header'>
            <h1>Trueno Ecommerce</h1>
            <img src={img} alt='Logo' width='200px'></img>
        </div>
    )
}
