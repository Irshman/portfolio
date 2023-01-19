import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const menuItems = ['Home', 'Portfolio', 'Skills', 'Certificates']

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

	const closeMenu = () => {
		setNavbarOpen(false)
	}

  return (
    <header className="header">
			<div className="container">
				<div className='header__branch'>Front-end developer</div>
				<div className="header__menu menu">
					<button onClick={handleToggle} type="button" className={`menu__icon ${navbarOpen ? 'menu__icon--open' : " "}`}><span></span></button>
					<nav className="menu__nav">
						<ul className={`menu__list ${navbarOpen ? 'menu__list--open' : ""}`}>
							{menuItems.map(item => <li key={item} className="menu__item"><NavLink onClick={() => closeMenu()} to={item === 'Home' ? '/' : item} className="menu__link">{item}</NavLink></li>)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
  )
}

export default Header