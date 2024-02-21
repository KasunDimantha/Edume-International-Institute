import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home_Page from './pages/Home_Page'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
