import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap'
import '../App.css'
import { useAuth } from '../AuthContext'
import { Link, useHistory } from 'react-router-dom'




export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            setError('Sign-in failed')
        }
    setLoading(false)
    }

        return (
            <Container className='loginContainer'>
                <h1>Log in</h1>
                <h4>Welcome back!</h4>
                <Form className="signupForm" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='loginLabel'>Enter User Name</Form.Label>
                        <Form.Control
                            required
                            id='email'
                            className="loginInput"
                            as="textarea"
                            type="email"
                            placeholder="Enter User Name"
                            ref={emailRef}
                            defaultValue=''
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='loginLabel'>Enter password</Form.Label>
                        <Form.Control
                            required
                            className="loginInput"
                            as="textarea"
                            type="password"
                            placeholder="Enter Password"
                            ref={passwordRef}
                        />
                        {error && <Alert variant='danger'>{error}</Alert>}
                    </Form.Group>
                    <Button type='submit' disabled={loading}>Login</Button>
                </Form>
                <h5>Need an account?<Link to='/login'>Sign up</Link></h5>
            </Container>
        )
    }