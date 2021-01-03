import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/TweetForm.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { UserContext } from "./UserContext";
import { TweetContext } from './TweetContext'
import { useState } from "react";
import 'firebase/firestore';
import NavBar from './Components/NavBar'
import { Container } from "react-bootstrap";
import Signup from './Pages/Signup'
import { AuthProvider } from './AuthContext'
import Login from './Pages/Login'
import PrivateRoute from './Pages/PrivateRoute'
import firebase from 'firebase'

firebase.firestore().collection('tweets').add({
  title: 'Joe Biden'
})


export default function App() {
  const [user, setUser] = useState("Max");
  const [tweets, setTweets] = useState({
    content: '',
    userName: "Max",
    date: new Date(Date.now())
})
 

  return (
    <Router>
    <AuthProvider>
    <TweetContext.Provider value={[tweets, setTweets]}>
    <UserContext.Provider value={[user, setUser]}>
        <Container>
        <NavBar className="justify-content-center"/>
        <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        </Switch>
        </Container>
    </UserContext.Provider>
    </TweetContext.Provider>
    </AuthProvider>
    </Router>
  );
}
