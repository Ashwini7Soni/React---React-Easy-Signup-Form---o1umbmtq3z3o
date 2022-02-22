import React from 'react'
import '../styles/App.css';
import { useState } from "react";
import { signUpFormValidation } from "../utils/validation";


const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState({});

  return (
    <div>
      
      <div className = "signup-form" style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
        <h1>Signup Form</h1>
        <div>
          <label>Name : </label>
          <input id = "name" value={name} placeholder = "name" onChange = {(event) => {
            setName(event.target.value);
          }} style = {{marginBottom: "0.8rem"}}/>
          <label>{(error != null)? error.name : ""}</label>
        </div>
        <div>
          <label>Email : </label>
          <input id = "email" value = {email} placeholder = "email" onChange = {(event) => {
            setEmail(event.target.value);
          }} style = {{marginBottom: "0.8rem"}}/>
          <label>{(error != null)? error.email : ""}</label>
        </div>
        <div>
          <label>Password : </label>
          <input id = "password" value={password} placeholder = "password" onChange={(event) => {
            setPassword(event.target.value);
          }} style = {{marginBottom: "0.8rem"}}/>
          <label>{(error != null)? error.password : ""}</label>
        </div>
        <div>
          <label>Consent : </label>
          <input type="checkbox" id = "consent" value = {consent} onChange={() => {
            setConsent(prev => !prev);
          }} style = {{marginBottom: "0.8rem"}}/>
        </div>
        <button type = "submit" onClick= {() => {
          const errObj = signUpFormValidation({name: name, email: email, password: password});
          setError(errObj);
          console.log(errObj);
      }}>Signup</button>
      </div>
    </div>
  );
}


export default App;
