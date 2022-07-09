import  Topbar  from './Components/Topbar/Topbar';
import './App.css';

import Home from './Pages/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import React from "react";
import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/write' element={<Write/>} />
      <Route path='/settings' element={<Settings />} />
        
    </Routes>
      
      </Router>
  );
}

export default App;
