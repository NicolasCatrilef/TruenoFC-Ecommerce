import React from 'react'
import { CardWidget } from '../CartWidget.js/CardWidget';
import './NavBar.css';


export const NavBar = () => {
    return (
        <nav className='container background-red'>
			<ul>
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
