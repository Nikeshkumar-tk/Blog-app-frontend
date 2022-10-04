import { useContext, useEffect } from 'react';
import { useState } from 'react';
import './Sidebar.css'
import axios from 'axios';
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';

 const Sidebar = () => {
  const {user}=useContext(Context)
  const [cats,setCats]=useState([])
  useEffect(()=>{
const getCat=async()=>{
  const res=await axios.get("/categories")
  setCats(res.data)
}
getCat()

  },[])
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
     { user&&<img
        src={user.profilePic}
        alt=""
      />}
      <p>
      

      </p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
            <ul className="sidebarList">
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}&user=${c.name}`} className="link">
                
                <li className="sidebarListItem">{c.name}</li>
                </Link>

              ))}
             
            
            </ul>
       
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
<div className="sidebarSocial">
<i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
</div>
    </div>
    </div>
  )
}
export default Sidebar;