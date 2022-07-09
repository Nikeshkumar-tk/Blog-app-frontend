import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <form  className="loginForm">
            <label>EMAIL</label>
            <input className='loginInput' type="email" placeholder='enter your email' />
            <label>PASSWORD</label>
            <input className='loginInput' type="password" placeholder='enter your password' />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to='/register' className='link'>Register</Link></button>
    </div>
  )
}

export default Login