 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp from './pages/SignUp';
import About_Page from './pages/About_Page';
import Student_Dashboard from './pages/Student_Dashboard';
import Announcements from './pages/Announcements';
// In your React component file (e.g., src/App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Manage_Profiles from './pages/Manage_Profile';
import Messages from './pages/Messages';
import Contact from './pages/component/Contact';
import Admin_Dashboard from './pages/Admin_Dashboard';
import AddStudent from './pages/AddStudent';
import LoadAllStudent from './pages/LoadAllStudent';
import LoadAllLecturer from './pages/LoadAllLecturer';
import AddLecturer from './pages/AddLecturer';
import Admin_navbar from './pages/component/Admin_navbar';
import Apply_Course from './pages/Apply_Course';
import AddCourses from './pages/AddCourse';
import LoadAllCourses from './pages/LoadAllCourses';
import AddAdmin from './pages/AddAdmin';
import LoadAllAdmin from './pages/LoadAllAdmin';
import Semester from './pages/Semester'; 
import Module from './pages/Module';
import LoadAllSemester from './pages/LoadAllSemester';
import LoadAllModule from './pages/LoadAllModule';



function App() {

  return (

    <>
    {/* <div className='d-flex'>
      <div className='col-auto'>
        <Admin_navbar />
      </div>
        <Routes>
          <Route exact path="/adminDashboard" element={<Admin_Dashboard />} />
          <Route exact path="/addStudent" element={<AddStudent />} />
          <Route exact path="/loadAllStudent" element={<LoadAllStudent />} />
          <Route exact path="/loadAllLecturer" element={<LoadAllLecturer />} />
          <Route exact path="/addLecturer" element={<AddLecturer />} />
          <Route exact path="/loadAllCourses" element={<LoadAllCourses />} />
          <Route exact path="/addCourse" element={<AddCourses />} />         
        </Routes>
    </div> */}
    
    <div>
        <Routes>
          <Route exact path="/" element={<Home_Page />} />
          <Route exact path="/signInPage" element={<SignIn_Page />} />
          <Route exact path="/signUp" element={<SignUp/>} />
          <Route exact path="/aboutPage" element={<About_Page />} />
          <Route exact path="/studentDashboard" element={<Student_Dashboard />} />
          <Route exact path="/announcements" element={<Announcements />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/achievements" element={<Achievements />} />
          <Route exact path="/manage_profiles" element={<Manage_Profiles />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/contact" element={<Contact />} />
          
          {/* <Route exact path="/admin_navbar"  element={<Admin_navbar/>}/> */}
          <Route exact path="/apply_course" element={<Apply_Course />} />

          <Route exact path="/adminDashboard" element={<Admin_Dashboard />} />
          <Route exact path="/addStudent" element={<AddStudent />} />
          <Route exact path="/loadAllStudent" element={<LoadAllStudent />} />
          <Route exact path="/loadAllLecturer" element={<LoadAllLecturer />} />
          <Route exact path="/addLecturer" element={<AddLecturer />} />
          <Route exact path="/loadAllCourses" element={<LoadAllCourses />} />         
          <Route exact path="/addCourse" element={<AddCourses />} /> 
          <Route exact path="/addAdmin" element={<AddAdmin />} /> 
          <Route exact path="/loadAllAdmin" element={<LoadAllAdmin />} /> 
          <Route exact path="/semester" element={<Semester />} />
          <Route exact path="/module" element={<Module />} />
          <Route exact path="/loadAllSemester" element={<LoadAllSemester />} />
          <Route exact path="/loadAllModule" element={<LoadAllModule />} />
         
        
          
        </Routes>

      
      </div>
      
      </>

      // </Router>

  
  )
}

export default App
