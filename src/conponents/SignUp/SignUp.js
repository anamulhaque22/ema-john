import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';
const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const nevigate = useNavigate();
    if(user){
        nevigate('/login');
    }
    const handleCreateUser = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if(password !== confirmPassword){
            setError("Password did not match")
            return;
        }
        createUserWithEmailAndPassword(email, password);
        event.preventDefault();
    };
    return (
        <div className='login-form-container'>
            <div className="login-form-content">
                <h4>Sign Up</h4>
                <Form noValidate validated={validated} onSubmit={handleCreateUser}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <p>{error}</p>
                    <button type="submit" className='btn-submit'>Sign Up</button>
                </Form>
                <div className='bottom-info'>
                    <span>New to Ema-john? {<Link to='/login'> Login</Link>}</span>
                    <div className='or-container'>Or</div>
                    <button className='btn-submit bottom-btn'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;