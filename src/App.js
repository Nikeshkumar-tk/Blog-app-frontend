import  Topbar  from './Components/Topbar/Topbar';
import './App.css';
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage"
import useLocalStorage from 'use-local-storage'

import Home from './Pages/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import React, { useContext, useState } from "react";
import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";
import SinglePost from './Components/SinglePost/SinglePost';
import { Context } from './context/Context';
import { storage } from './Components/Firebase';
import About from './Components/About/About';



function App() {
  const {user}=useContext(Context)
  



  
  return (
    <Router>
      <Topbar/>
    <Routes>
      {/* <Route path='/logout' element={<Login />}/> */}
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={user?<Home />:<Login />} />
      <Route path='/register' element={user?<Home />:<Register />} />
      <Route path='/write' element={<Write />} />
      <Route path='/settings' element={<Settings  />} />
      <Route path='/posts/:postId' exact element={<Single />} />
      <Route path='/about' element={<About />} />
        
    </Routes>
      
      </Router>
  );
}

export default App;
