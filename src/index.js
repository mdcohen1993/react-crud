import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp(
  {
    apiKey: "AIzaSyA7LzzRsVBr0PlFKuf9E2kSU5ytjTa26gw",
    authDomain: "react-project-2-d0411.firebaseapp.com",
    projectId: "react-project-2-d0411",
    storageBucket: "react-project-2-d0411.appspot.com",
    messagingSenderId: "997717037826",
    appId: "1:997717037826:web:969232ad0ac460cee2e81b",
    measurementId: "G-R70CCVP4HQ"
  }
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
