import React from 'react'
import { Image } from 'semantic-ui-react';
import { CardWidget } from '../CartWidget.js/CardWidget';
import logo from './Trueno-FC.ico'

import './NavBar.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className='container background-red'>
			<ul>
				<li>
					<Link to="/">
						<Image src={logo} size='tiny' />
					</Link>
				</li>
				<li>
					<a href='https://www.lnf.cl'>Series</a>
				</li>
				<li>
					<a href='https://www.google.com'>Productos</a>
				</li>
				<li>
					<a href='https://www.google.com'>Pago de Cuotas</a>
				</li>
				<li>
					<a href='https://www.google.com'>Contacto</a>
				</li>
				<li>
					<CardWidget className='CardWidget'/>
				</li>
			</ul>
		</nav>
    )
}
