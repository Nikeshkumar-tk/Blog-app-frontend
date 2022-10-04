
import './Topbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const  Topbar = () => {
  const {user,dispatch}=useContext(Context);
  const [searchMode,setSearchMode]=useState(false)
  const [key,setKey]=useState('')
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
    window.location.replace("/login")
  }
  
  useEffect(()=>{user&&
    
    alanBtn({
      key: "0846c27dcac8a9c52a6d3b017b90dcd12e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand:({command,key})=> {
        if (command === "settings") {
          window.location.replace("/settings")
        }
        else if(command==="homepage"){
          window.location.replace("/")
        }
        else if(command==="write"){
          setTimeout(() => {
            window.location.replace("/write")
          }, 2500);
        }
        else if(command==="logout"){
          setTimeout(()=>{
            dispatch({type:"LOGOUT"})
            window.location.replace("/login")
          },2500)
        }
        else if(command==="user"){
          window.location.replace(`/?user=${key}`)
        }
        else if(command==="category"){
          window.location.replace(`/?cat=${key}`)
          console.log(key)
        }
      },
      rootEl: document.getElementById("alan-btn"),
    });
  })
   
  return (
  

    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            
              <Link to='/' className='link'>HOME</Link>
            
          </li>
          <li className="topListItem">
          <Link to='/about' className='link'>ABOUT</Link>
          </li>
          {/* <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li> */}
          <li className="topListItem">

          <Link to='/write' className='link'>WRITE</Link>
            
          </li>
          <li className="topListItem"><Link to='/logout' className='link' onClick={handleLogout}>{user&&"LOGOUT"}</Link></li>
        </ul>
      </div>
       
        <div className="topRight">
         {
       user ?(<Link to="/settings">
       
       
       <img
         className="topImg"
         src={user.profilePic}
         alt=""
       /></Link>):(
              <ul className='topList'>
              <li className='topListItem'>
              <Link to='/login' style={{textDecoration:"none",color:"inherit"}}>LOGIN</Link>

              </li>
              <li className='topListItem'>

            <Link to='/register' style={{textDecoration:"none",color:"inherit"}}>REGISTER</Link>
              </li></ul>)
            }
         
          
      { searchMode?<div><input type='text' className='searchBox' placeholder='search' onChange={(e)=>setKey(e.target.value)} onMouseEnter={()=>console.log("hello world")}/><Link to={`/?cat=${key}&user=${key}`}><i className="iconWithBox fas fa-search" onClick={()=>setSearchMode(false)}></i></Link></div>:<i className="topSearchIcon fas fa-search" onClick={()=>setSearchMode(true)}></i>}
      </div>
    </div> 
  )
}
export default Topbar;
