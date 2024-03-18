import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';
import Teacher_dashbord from './pages/Teacher/Teacher_dashbord';
import Student_dashbord from './pages/Student/Student_dashbord';
import Admin_dashbord from './pages/Admin/Admin_dashbord';
import S_EditProfile from './pages/Student/S_EditProfile';
import S_AccessCourcesPage from './pages/Student/S_AccessCourcesPage';
import S_AnnouncementsPage from './pages/Student/S_AnnouncementsPage';
import S_AssingmentPage from './pages/Student/S_AssingmentPage';
import S_EntrolledCouecesPage from './pages/Student/S_EntrolledCouecesPage';
import S_PersonalResultPage from './pages/Student/S_PersonalResultPage';
import Courses_Page from './pages/Courses_Page';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"  element={<SignIn_Page/>} />
          <Route exact path="/signUpPage"  element={<SignUp_Page/>} />  
          <Route exact path="/coursesPage"  element={<Courses_Page/>} />
          <Route exact path="/t_dashbord"  element={<Teacher_dashbord/>}/>
          <Route exact path="/s_dashbord"  element={<Student_dashbord/>}/>
          <Route exact path="/a_dashbord"  element={<Admin_dashbord/>}/>
          <Route exact path='/s_dashbord/s_editProfile' element={<S_EditProfile/>}/>
          <Route exact path='/s_dashbord/s_accessCourcesPage' element={<S_AccessCourcesPage/>}/>
          <Route exact path='/s_dashbord/s_announcementsPage' element={<S_AnnouncementsPage/>}/>
          <Route exact path='/s_dashbord/s_assingmentPage' element={<S_AssingmentPage/>}/>
          <Route exact path='/s_dashbord/s_entrolledCouecesPage' element={<S_EntrolledCouecesPage/>}/>
          <Route exact path='/s_dashbord/s_personalResultPage' element={<S_PersonalResultPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
