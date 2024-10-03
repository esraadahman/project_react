import React, { useState } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/—Pngtree—woman face logo_14820938.png'; 

export default function Navibar() {
    const [userName] = useState(localStorage.getItem('username')); 

    return (
        <>
            <style>
                {`
                    .dropdown-menu {
                        right: auto; /* Override Bootstrap default */
                        left: -10px; /* Adjust this value to your liking */
                        background-color: #f8d6e0; /* Light pink background */
                        text-align: center; /* Center text */
                    }
                    .dropdown-toggle {
                        background-color: lightpink; /* Black background for button */
                        color: red; /* Red text for button */
                    }
                    .dropdown-toggle:hover {
                        background-color: lightpink; /* Light pink on hover */
                    }
                    

                    .logout-button {
                        background-color: red; /* Red background for Logout button */
                        color: white; /* White text */
                        border: none; /* Remove border */
                        padding: 10px 20px; /* Padding for better appearance */
                        text-align: center; /* Center text */
                        display: block; /* Make it block level to fill width */
                        width: 100%; /* Full width */
                    }
                    .logout-button:hover {
                        background-color: darkred; /* Darker shade on hover */
                    }
                    .nav-link {
                        text-decoration: none; /* Remove underline */
                    }
                    .navbar-brand {
                        transition: color 0.3s ease; /* Smooth transition for color change */
                    }
                    .navbar-brand:hover {
                        color: #d47a87; /* Change color on hover */
                    }
                `}
            </style>

            <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#f8d6e0", width: '100%' }}>
                <Container fluid>
                    <Navbar.Brand href="#home" style={{ fontSize: 40 }}>
                        <img src={logo} alt="Logo" style={{ height: 90, marginRight: 20 }} />
                        Women Beauty
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink 
                                style={({ isActive }) => ({
                                    fontSize: 25,
                                    color: isActive ? "#d47a87" : 'white' // Light pink if active, otherwise white
                                })} 
                                to="/Home" 
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                style={({ isActive }) => ({
                                    fontSize: 25,
                                    marginLeft: 10,
                                    color: isActive ? "#d47a87" : 'white' // Light pink if active, otherwise white
                                })} 
                                to="/products" 
                                className="nav-link"
                            >
                                Products
                            </NavLink>
                            <Dropdown as={Nav.Item} align="end" style={{color:'white'}}>
                                <Dropdown.Toggle  className="nav-link dropdown-toggle" id="user-dropdown" style={{backgroundColor:'pink'}}>
                                    <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' ,color:'white' }} /> 
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.ItemText style={{ paddingTop: 10 , color:"white" }}>{userName}</Dropdown.ItemText>
                                    <Dropdown.Item>
                                        <Link to='/' style={{textDecoration:"none"}}>
                                        <button className="logout-button"  >
                                            Logout
                                        </button></Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
