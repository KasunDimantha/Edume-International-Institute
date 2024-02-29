import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';
import Teacher_dashbord from './pages/Teacher/Teacher_dashbord';
import Student_dashbord from './pages/Student/Student_dashbord';
import Admin_dashbord from './pages/Admin/Admin_dashbord';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"  element={<SignIn_Page/>} />
          <Route exact path="/signUpPage"  element={<SignUp_Page/>} />  
          <Route exact path="/t_dashbord"  element={<Teacher_dashbord/>}/>
          <Route exact path="/s_dashbord"  element={<Student_dashbord/>}/>
          <Route exact path="/a_dashbord"  element={<Admin_dashbord/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
