import React from 'react';
import {
Nav,
NavLogo,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

import hanu_logo_web from "./assets/hanu_logo_web.png";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavLogo>
		<NavLink to='/' activeStyle>
			<img src={hanu_logo_web} alt='logo' style={{"width":"100px"}}></img>
			</NavLink>
		</NavLogo>
		<NavMenu>
		<NavLink to='/#about' activeStyle>
			AboutUs
		</NavLink>
		<NavLink to='/#features' activeStyle>
			Features
		</NavLink>
		<NavLink to='/#contact' activeStyle>
			Contact Us
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
