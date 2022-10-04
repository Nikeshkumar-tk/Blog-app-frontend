import './Register.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [err,setErr]=useState(false)
  const [emailval,setEmailval]=useState('')
  const [emailValid,setemailValid]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    
    setErr(false)
    if(emailval==='valid'){
    try{
      const res=await axios.post("/auth/register",{
        username,
        email,
        password

    })
    res.data&&window.location.replace("/login")
    }catch(err){

  setErr(true)
    }}else{
      console.log('Email not valid')
      console.log(emailval)
    }
  }
  const validateEmail=async()=>{
await axios({ method: 'GET',
url: 'https://zerobounce1.p.rapidapi.com/v2/validate',
params: {
  ip_address: 'replace_the_IP_address_the_email_signed_up_from',
  email: `${email}`
},
headers: {
  'X-RapidAPI-Key': '39917aa29amshb5bebf0758c9345p197919jsn308218859cd1',
  'X-RapidAPI-Host': 'zerobounce1.p.rapidapi.com'
}
}).then((res)=>{
  console.log(res.data.status)
  setEmailval(res.data.status)
  console.log(emailval)
 
})
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
        <input className='registerInput' type="password" placeholder='enter your password' onChange={(e)=>{setPassword(e.target.value)}} onMouseEnter={(e)=>validateEmail()}/>
        <button className="registerButton">Register</button>
    </form>
    <button className="registerLoginButton" type='submit'><Link to='/login' className='link'>Login</Link></button>
    {err&&<span style={{color:"red",marginTop:10}}>Username or emailid already exists</span>}
    {emailval==='invalid'&&<span style={{color:"red",marginTop:10}}>Please enter a valid email</span>}
</div>
  )
}

export default Register