import React , { useState }  from 'react'
import style from './Login.module.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import LoginImg from '../assets/login.jpg'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
  };
  function handleSubmit(event) {
    event.preventDefault()
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(formData.email === loggeduser.email && formData.password === loggeduser.password) {
        localStorage.setItem("loggedin" , true)
      navigate('/');
    } else {
      alert ("somethin went wrong")
    }
  }
  return (
    <div>
      <form action="#"  onSubmit={handleSubmit}>
      <div className="container">
          <div className="row">
            <div className="col-md-6" style={{marginTop:'8rem'}}>
                <h1 className="mb-5">Login Form</h1>
                <div className={style.form__group}>
                <MdEmail className={style.icon}  />
                    <input type="email" className={style.form__field}placeholder="Email" onChange={handleChange} value={formData.email} name="email"required />
                </div> 
                <div className={style.form__group}>
                <RiLockPasswordFill className={style.icon}  />
                    <input type="password" className={style.form__field}placeholder="Password" value={formData.password} name="password"  onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center" style={{ height:'55vh'}}>
                  <img src={LoginImg} alt=""/>
              </div>
             
          </div>
          <div>
              <Button type="submit" className={style.btn}>Login</Button>
            <div>Create an Account  <NavLink to = '/signup'>SignUp</NavLink></div>
          </div>
      </div>
      </form>
    </div>
  )
}

export default Login
