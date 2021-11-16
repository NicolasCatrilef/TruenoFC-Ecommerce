import React from 'react'
import './NavBar.css';


export const NavBar = () => {
    return (
        <nav className='container'>
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
			</ul>
		</nav>
    )
}
