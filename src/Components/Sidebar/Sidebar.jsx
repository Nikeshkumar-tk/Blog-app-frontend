import { useEffect } from 'react';
import { useState } from 'react';
import './Sidebar.css'
import axios from 'axios';
import {Link} from "react-router-dom"

 const Sidebar = () => {
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
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
      />
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta minus? Earum suscipit fuga tempora ipsam illo cumque excepturi asperiores, repellendus optio natus dicta facere voluptate sunt! Natus, itaque soluta.

      </p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
            <ul className="sidebarList">
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                
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