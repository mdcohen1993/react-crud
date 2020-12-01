import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Components/TweetForm.css'
import TweetForm from './Components/TweetForm.jsx';
import './App.css';


export default function App(){
    return (
      <Container fluid className='App'>
        <TweetForm />
      </Container>
    );
}

