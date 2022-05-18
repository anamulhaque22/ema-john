import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container className='custom-class'>
                    <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/order">Order</Link></li>
                                <li><Link to="/order-review">Order Review</Link></li>
                                <li><Link to="/manage-inventory">Manage Inventory</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;