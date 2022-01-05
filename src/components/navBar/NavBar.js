import React, { useContext, useState } from 'react'
import { Image, Input, Menu, Segment } from 'semantic-ui-react';
import { CardWidget } from '../CartWidget.js/CardWidget';
import logo from './Trueno-FC.ico'

import './NavBar.css';
import { Link } from 'react-router-dom';


//Context
import { CartContext } from '../Context/CartContext'


export const NavBar = () => {

	const [ items, setItems ] = useContext(CartContext);
	
	const [option, setOption] = useState('initialState');
	
	const handleItemClick = ({ name }) => {
		setOption(name)
	}

    return (
		<div className='container background-red'>
			<Menu attached='top' tabular>
				<Menu.Menu position='left'>
					<Link to="/">	
						<Menu.Item>
							<Image src={logo} size='tiny' />
						</Menu.Item>
					</ Link>
				</Menu.Menu>
				
				<Link to='/category/camiseta'class="item">
					<Menu.Item name='Camisetas' active={option === 'Camisetas'} onClick={handleItemClick} />
				</ Link>
				<Link to='/category/accesorio' class="item">
					<Menu.Item name='Accesorios' active={option === 'Accesorios'} onClick={handleItemClick} />
				</ Link>
				
				{ Number(items.length) > 0 &&
					<Menu.Menu position='right'>
						<Link to='/cart' class='item'>
								<Menu.Item>
									<CardWidget className='CardWidget'/>
								</Menu.Item>
						</ Link>
					</Menu.Menu>
				}
			</Menu>
      	</div>
    )
}
