 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';
import About_Page from './pages/About_Page';
import Student_Dashboard from './pages/Student_Dashboard';
import Announcements from './pages/Announcements';
// In your React component file (e.g., src/App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Achievements from './pages/Achievements';



function App() {

  return (
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"  element={<SignIn_Page/>} />
          <Route exact path="/signUpPage"  element={<SignUp_Page/>} />
          <Route exact path="/aboutPage"  element={<About_Page/>}/>
          <Route exact path="/studentDashboard"  element={<Student_Dashboard/>}/>
          <Route exact path="/announcements"  element={<Announcements/>}/>
          <Route exact path="/courses"  element={<Courses/>}/>
          <Route exact path="/events"  element={<Events/>}/>
          <Route exact path="/achievements"  element={<Achievements/>}/>
        </Routes>
      // </Router>

  
  )
}

export default App
