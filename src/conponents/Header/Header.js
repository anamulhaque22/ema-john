import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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
                                <li>
                                    {
                                        user ?
                                            <Link to='/' onClick={logout}>Sign Out</Link> :
                                            <Link to="/login">Login</Link>
                                    }
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;