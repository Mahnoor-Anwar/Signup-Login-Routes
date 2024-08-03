import React, { useState } from 'react'
import style from './Signup.module.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SignupImg from '../assets/signup.jpg'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
  };


  function handleSubmit(event) {
    localStorage.setItem("user", JSON.stringify(formData));
   
      navigate('/login');
   
    event.preventDefault()
    // alert("You're Signed up");
    // console.log(name , email , password)
  }

  return (
      <div className="container mt-5">
        <form action="#" onSubmit={handleSubmit}>
        <div className="row">
              <div className="col-md-6">
                  <h1>Signup Form</h1>
                  <div className={style.form__group}>
                    <FaUser className={style.icon} />
                    <input type="input" onChange={ handleChange} className={style.form__field}placeholder="Name" name="fullname" id='name' value={formData.fullname} required />
                </div>
                <div className={style.form__group}>
                <MdEmail className={style.icon}  />
                    <input type="email" onChange={handleChange} className={style.form__field}placeholder="Email" name="email" id='email' value={formData.email} required />
                </div> 
                <div className={style.form__group}>
                <RiLockPasswordFill className={style.icon}  />
                    <input type="password" onChange={handleChange} className={style.form__field}placeholder="Password" name="password" id='passowrd' value={formData.password}  required />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center" style={{ height:'55vh'}}>
                  <img src={SignupImg} alt=""/>
              </div>
          </div>
          <div>
            <Button type ="submit "className={style.btn}>Signup</Button>
            <div>Alrrady Have an Account ? <NavLink to ='/login'>Login</NavLink></div>
          </div>
        </form>
         
      </div>
  )
}

export default Signup
