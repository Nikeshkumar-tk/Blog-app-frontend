import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
     <div className='register'>
        <span className="registerTitle">Register</span>
    <form  className="registerForm">
    <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>EMAIL</label>
        <input className='registerInput' type="email" placeholder='enter your email' />
        <label>PASSWORD</label>
        <input className='registerInput' type="password" placeholder='enter your password' />
        <button className="registerButton">Register</button>
    </form>
    <button className="registerLoginButton"><Link to='/login' className='link'>Login</Link></button>
</div>
  )
}

export default Register