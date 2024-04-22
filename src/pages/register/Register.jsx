import "./register.scss"
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    emil:"",
    password:"",
    name:"",
  })

  const[err, setErr] = useState(null);


  const handleChange= (e) =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleClick = async (e) =>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:8000/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data);
    }
  }

  return (
    <div className="register">
      <div className="card">
      <div className="left">
        <h1>TravelShare</h1>
        <p>This social media was created by
          the person who likes traveling.
          If you want to share your expirience,
          good places in different countries/towns,
          or you look for these places. This social media 
          is for you.
          Please, be nice with everyone in this website
          we want to create friendly and comfortable environment
          for everyone
        </p>
        <span>Do you have an account?</span>
        <Link to="/login">
         <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
          <input type="email" placeholder="Email" name="emil" onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
          <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
          {err && err}
          <button onClick={handleClick}>Register</button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Register