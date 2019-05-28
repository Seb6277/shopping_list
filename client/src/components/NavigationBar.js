import React from 'react'
import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler} from 'reactstrap'
import Nav from "reactstrap/es/Nav";

class NavigationBar extends React.Component {
    render() {
        return(
            <Navbar color="dark" dark expand="md" className='navigation_bar'>
                <NavbarBrand href="/" color="dark">Shopping List</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Shopping List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar