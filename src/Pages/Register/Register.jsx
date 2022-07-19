import './Register.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [err,setErr]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setErr(false)
    try{
      const res=await axios.post("/auth/register",{
        username,
        email,
        password

    })
    res.data&&window.location.replace("/login")
    }catch(err){

  setErr(true)
    }
  }
  return (
     <div className='register'>
        <span className="registerTitle">Register</span>
    <form  className="registerForm" onSubmit={handleSubmit}>
    <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."  onChange={(e)=>setUsername(e.target.value)}/>
        <label>EMAIL</label>
        <input className='registerInput' type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <label>PASSWORD</label>
        <input className='registerInput' type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
        <button className="registerButton">Register</button>
    </form>
    <button className="registerLoginButton" type='submit'><Link to='/login' className='link'>Login</Link></button>
    {err&&<span style={{color:"red",marginTop:10}}>Something went wrong</span>}
</div>
  )
}

export default Register