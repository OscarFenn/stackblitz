import React from "react";
import "./style.css";
import MembersList from "./components/MembersList";
import Form from "./components/Form";
import {MemberProvider} from './components/MemberContext'

export default function App() {
  
  return (
    <MemberProvider>
    <div>
<nav class="navbar bg-body-tertiary" style={{backgroundColor: '#3b5998'}}>
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1" style={{color: 'white'}}><b>Marketplace</b></span>
  </div>
</nav>
<main>
  <div class="container">
    <h1><b>Your household</b></h1>
    <br></br>
    <p>Welcome to The Marketplace! Review your household below:</p>

  <div class="row g-4">
    <MembersList />
  </div>
  <Form />
  </div> 

</main> 
    </div>
    </MemberProvider>
  );
}
