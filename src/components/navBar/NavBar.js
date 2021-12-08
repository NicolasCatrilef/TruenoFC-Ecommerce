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
					<Link to='/category/camiseta'>
						<p>Camisetas</p>
					</Link>
				</li>
				<li>
					<Link to='/category/accesorio'>
						<p>Accesorios</p>
					</Link>
				</li>
				<li>
					<Link to='/cart'>
						<CardWidget className='CardWidget'/>
					</Link>
				</li>
			</ul>
		</nav>
    )
}
