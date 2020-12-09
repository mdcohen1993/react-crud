import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap'
import '../App.css'
import { useAuth } from '../AuthContext'
import { useHistory } from 'react-router-dom'


export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser, logout } = useAuth()
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

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
        console.log('logout success')
      } catch {
        setError("Failed to log out")
      }
    }

    return(
        <Container className='loginContainer'>
            <h1>Sign up</h1>
            <h4>Welcome!</h4>
            <Button type='click' disabled={loading} onClick={handleLogout}>Log out</Button>
        <Form className="loginForm" onSubmit={handleSubmit}>
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