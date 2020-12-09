import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar(props){
    return (
        <Navbar sticky="top" bg='dark' variant="dark">
            <Nav className='m-left'>
                <Nav.Link className='navLink' href='/'>Home</Nav.Link>
                <Nav.Link className='navLink' href='/Profile'>Profile</Nav.Link>
                <Nav.Link className='navLink' href='/Login'>Login</Nav.Link>
                <Nav.Link className='navLink' href='/SignUp'>Sign Up</Nav.Link>
            </Nav>
        </Navbar>
    )
}