import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import austin from '../../images/austin-wade.png';
import './Home.css';
const Home = () => {
    return (
        <div className='hero-area'>
            <Container>
                <Row className='align-items-center' >
                    <Col lg="7" md="6">
                        <div className="hero-left">
                            <p className='sale-up'><span>Sale up to 70% off</span></p>
                            <h1>New Collection For Fall</h1>
                            <p>Discover all the new arrivals of ready-to-wear collection.</p>
                            <Link to={"/product"} className="btn">SHOP NOW</Link>
                        </div>
                    </Col>
                    <Col lg="5" md="6">
                        <div className="hero-right d-flex justify-content-lg-end justify-content-center">
                            <img src={austin} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;