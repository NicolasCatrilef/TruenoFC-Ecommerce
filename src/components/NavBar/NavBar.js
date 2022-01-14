import React, { useContext, useState } from 'react'
import { Image, Dropdown, Menu, } from 'semantic-ui-react';
import { CardWidget } from '../CartWidget.js/CardWidget';
import logo from './Trueno-FC.ico'

import './NavBar.css';
import { Link } from 'react-router-dom';


//Context
import { CartContext } from '../Context/CartContext'


export const NavBar = () => {

	const [ items, setItems ] = useContext(CartContext);
	
	const [option, setOption] = useState('initialState');
	
	const handleItemClick = (e, {name}) => {
		setOption(name)
	}

    return (
		<div className='container background-red'>
			<Menu attached='top' secondary>
				<Menu.Menu position='left'>
					<Link to="/">	
						<Menu.Item>
							<Image src={logo} size='tiny' />
						</Menu.Item>
					</ Link>
				</Menu.Menu>
				
				<Link to='/'class="item">
					<Menu.Item name='Inicio' active={option === 'Home'} onClick={handleItemClick} />
				</ Link>
 
				<Dropdown item text='Categorias' active={option === 'Categorias'} onClick={handleItemClick} >
					<Dropdown.Menu>
						<Dropdown.Item>
							<Link to='/category/camiseta'>Camisetas</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/category/accesorio'>Accesorios</Link>
						</Dropdown.Item>
					</Dropdown.Menu>
            	</Dropdown>
				{/* <Link to='/category/accesorio' class="item">
					<Menu.Item name='Accesorios' active={option === 'Accesorios'} onClick={handleItemClick} />
				</ Link> */}
				
				{/* { Number(items.length) > 0 && */}
					<Menu.Menu position='right'>
						<Link to='/cart' class='item'>
								<Menu.Item>
									<CardWidget className='CardWidget'/>
								</Menu.Item>
						</ Link>
					</Menu.Menu>
				{/* } */}
			</Menu>
      	</div>
    )
}
