import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/TweetForm.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { UserContext } from "./UserContext";
import { TweetContext } from './TweetContext'
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("Max");
 

  return (
    <TweetContext.Provider>
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Profile" component={Profile} />
      </Router>
    </UserContext.Provider>
    </TweetContext.Provider>
  );
}
