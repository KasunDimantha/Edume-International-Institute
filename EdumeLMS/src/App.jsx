import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';
import S_HomePage from './pages/Student/S_HomePage';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"  element={<SignIn_Page/>} />
          <Route exact path="/signUpPage"  element={<SignUp_Page/>} />  
          <Route exact path="/S_homepage"  element={<S_HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
