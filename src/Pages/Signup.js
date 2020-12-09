import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap'
import '../App.css'
import { useAuth } from '../AuthContext'
import { useHistory } from 'react-router-dom'


export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
          return setError('Passwords do not match')
        }
        try {
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push('/')
    }catch{
      setError('Signup failed')
        }
        setLoading(false)
    }

    return(
        <Container className='loginContainer'>
            <h1>Sign up</h1>
            <h4>Welcome!</h4>
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
            />
            </Form.Group>
            <Form.Group>
            <Form.Label className='loginLabel'>Create password</Form.Label>
            <Form.Control
              required
              className="loginInput"
              as="textarea"
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
            />
            <Form.Label className='loginLabel'>Confirm password</Form.Label>
            <Form.Control
              required
              className="loginInput"
              as="textarea"
              type="password"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
            />
            {error && <Alert variant='danger'>{error}</Alert>}
            </Form.Group>
            <Button type='submit' disabled={loading}>Sign up!</Button>
        </Form>
        </Container>
    )
}