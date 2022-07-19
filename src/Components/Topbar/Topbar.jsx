
import './Topbar.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext } from 'react';

const  Topbar = () => {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
    window.location.replace("/login")
  }
   
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
          <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li>
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
         
          
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div> 
  )
}
export default Topbar;
