
import './Topbar.css'
import {Link} from 'react-router-dom'

const  Topbar = () => {
  const user=false;
   
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
          <li className="topListItem"><Link to='/logout' className='link'>LOGOUT</Link></li>
        </ul>
      </div>
       
        <div className="topRight">
         {
       user ?(
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />):(
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
