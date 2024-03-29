import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const nevigate = useNavigate();
    
    //redirect to a path where require path
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        signInWithEmailAndPassword(email, password);
        
        event.preventDefault();
    };
    return (
        <div className='login-form-container'>
            <div className="login-form-content">
                <h4>Login</h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <button type="submit" className='btn-submit'>Login</button>
                </Form>
                <div className='bottom-info'>
                    <span>New to Ema-john? {<Link to='/signup'>Create New Account</Link>}</span>
                    <div className='or-container'>Or</div>
                    <button className='btn-submit bottom-btn'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;