import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navibar() {
    return (
        <Navbar  variant="dark" >
            <Container style={{backgroundColor:'black'}}>
                <Navbar.Brand href="#home" style={{fontSize:30 }}>ShopApp</Navbar.Brand>
              
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                            to="/" 
                           
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                            to="/products" 
                           
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                            to="/login" 
                           
                        >
                            
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
