import React, {useContext, useState} from 'react'
import '../App.css'
import Logo from "../images/logo.png"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs,setInputs]=useState({
    username:"",
    password:""
  })
  const [err,setError] = useState(null);
  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  console.log(currentUser);

  const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit= async (e) =>{
    e.preventDefault()
    try{
      await axios.post("/auth/login",inputs)
      navigate("/")
      
    }catch(err){
setError(err.response.data);
    }
  }

  return (
    <div className='login'>
    <div className="login-bg">
    <img src={Logo} alt="" />
    </div>
    <div className="login-content">
      <div className="form-bx">
        <h2>Login</h2>
        <form action="">
          <div className="input-bx">
              <span>Username</span>
              <input type="text" name='username' onChange={handleChange} />
          </div>
          <div className="input-bx">
              <span>Password</span>
              <input type="password" name='password' onChange={handleChange}/>
          </div>
          <div className="input-bx">
            <button onClick={handleSubmit} type='submit'>Login</button>
            {err&&<p className='error'>{err}</p>}
          </div>
          <div className="input-bx">
            <p>Don't have an account?<span><Link to="/register">Register</Link></span></p> 
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login