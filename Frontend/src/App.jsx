import React from 'react'
import { BrowserRouter as Router, Route,Routes, useLocation } from 'react-router-dom'
// import {MyState} from "./Context/Data/MyState";
import Home from './Page/Home/Home'
import Signup from './Page/Signup/Signup'
import UpdateNote from './Page/UpdateNote/UpdateNote'
import AddNote from './Page/AddNote/AddNote'
import Login from './Page/Login/Login'
import Nopage from './Page/NoPage/Nopage'
import Profile from './Page/Profile/Profile'
import LogOut from './Page/Logout/LogOut'
import { Toaster } from 'react-hot-toast';
import MyState from './Context/Data/MyState'


// Define a new component that will handle the redirect
const RedirectToHome = () => {
  const location = useLocation();
  
  // Redirect to the home page when an unknown route is accessed
  return <Navigate to="/" state={{ from: location.pathname }} />;
};

function App() {



  return (
    <MyState>


      <Router>

        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/updatenote" element={<UpdateNote/>} />
        <Route path="/addnote" element={<AddNote/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<LogOut/>} />

        <Route path="/*" element={<RedirectToHome />} /> {/* Catch-all route */}
        </Routes>
    {/* Toast container */}
    <Toaster />
      </Router>
        
    </MyState>

  )
}

export default App