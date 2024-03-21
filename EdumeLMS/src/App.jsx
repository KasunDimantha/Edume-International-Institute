import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
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
import { useAuthContext } from './hooks/useAuthContext';
import A_LoadallAdminPage from './pages/Admin/A_LoadallAdminPage';
import A_LoadallStudentPage from './pages/Admin/A_LoadallStudentPage';
import A_LoadallTeacherPage from './pages/Admin/A_LoadallTeacherPage';
import A_LoadallCourse from './pages/Admin/a_component/A_LoadallCourse';
import A_LoadallCoursePage from './pages/Admin/A_LoadallCoursePage';



function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"   element={!user ? <SignIn_Page/> : 
                                                    user.role === "Admin" ? <Navigate to="/a_dashbord"/> :
                                                    user.role === "Student" ? <Navigate to="/s_dashbord"/> :
                                                    <Navigate to="/t_dashbord"/>} />
          <Route exact path="/signUpPage"   element={!user ? <SignUp_Page/> : <Navigate to="/signInPage"/>} />  
          <Route exact path="/coursesPage"  element={<Courses_Page/>} />
          <Route exact path="/t_dashbord"   element={user ? <Teacher_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path="/s_dashbord"   element={user ? <Student_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path="/a_dashbord"   element={user ? <Admin_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path='/s_dashbord/s_editProfile'          element={<S_EditProfile/>}/>
          <Route exact path='/s_dashbord/s_accessCourcesPage'    element={<S_AccessCourcesPage/>}/>
          <Route exact path='/s_dashbord/s_announcementsPage'    element={<S_AnnouncementsPage/>}/>
          <Route exact path='/s_dashbord/s_assingmentPage'       element={<S_AssingmentPage/>}/>
          <Route exact path='/s_dashbord/s_entrolledCouecesPage' element={<S_EntrolledCouecesPage/>}/>
          <Route exact path='/s_dashbord/s_personalResultPage'   element={<S_PersonalResultPage/>}/>
          <Route exact path='/a_dashbord/a_loadalladminPage'     element={<A_LoadallAdminPage/>}/>
          <Route exact path='/a_dashbord/a_loadallstudentPage'   element={<A_LoadallStudentPage/>}/>
          <Route exact path='/a_dashbord/a_loadallteacherPage'   element={<A_LoadallTeacherPage/>}/>
          <Route exact path='/a_dashbord/a_loadallcoursePage'    element={<A_LoadallCoursePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
