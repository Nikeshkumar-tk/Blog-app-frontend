import './Login.css'
import {Link} from 'react-router-dom'
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () => {
  const userRef=useRef();
  const passwordRef=useRef();
  const {user,dispatch,isFetching}=useContext(Context)
const handleSubmit=async(e)=>{
  e.preventDefault();
  dispatch({type:"LOGIN_START"})
  try{
const res=await axios.post("/auth/login",{
  username:userRef.current.value,
  password:passwordRef.current.value

})
dispatch({type:"LOGIN_SUCESS",payload:res.data})
console.log(user)
  }catch(err){
dispatch({type:"LOGIN_FAILURE"})
  }

}
console.log(isFetching)

  return (
    <div className='login'>
        <form  className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='loginInput' type="text" placeholder='enter your username' ref={userRef}/>
            <label>PASSWORD</label>
            <input className='loginInput' type="password" placeholder='enter your password' ref={passwordRef}/>
            <button className="loginButton" type='submit'>Login</button>
        </form>
        <button className="loginRegisterButton"><Link to='/register' className='link'>Register</Link></button>
    </div>
  )
}

export default Login