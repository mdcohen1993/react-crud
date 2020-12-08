import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/TweetForm.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { UserContext } from "./UserContext";
import { TweetContext } from './TweetContext'
import { useState } from "react";
import firebase from 'firebase';
import 'firebase/firestore';
import NavBar from './Components/NavBar'
import { Container } from "react-bootstrap";


export default function App() {
  const [user, setUser] = useState("Max");
  const [tweets, setTweets] = useState({
    content: '',
    userName: "Max",
    date: new Date(Date.now())
})
 

  return (
    <Container>
    <TweetContext.Provider value={[tweets, setTweets]}>
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <NavBar className="justify-content-center"/>
        <Route path="/" exact component={Home} />
        <Route path="/Profile" component={Profile} />
      </Router>
    </UserContext.Provider>
    </TweetContext.Provider>
    </Container>
  );
}
