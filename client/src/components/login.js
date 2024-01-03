import react, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './validation'
import Axios from 'axios'
import  '../App.css'

export default function Login(){
    const navigate =useNavigate();
 const [values, setValues] = useState({
    email : '',
    password : ''
 })
 const [error, setError] = useState({})
 const HandelInput = (e)=> {
    setValues(prev => ({...prev , [e.target.name]: [e.target.value]}))

 }
 console.log(values);
 const handelSubmit = (e) => {
    e.preventDefault();
    setError(Validation(values));

    if(error.password === '' && error.email=== ''){
        Axios.post("http://localhost:3006/login",values).then((res) => {
            if(res.data === "success"){
                navigate("/home")
                localStorage.setItem("cool", values.email);
            }else{
                alert("not succes")
            }
        }).catch((err) => {
            console.log(err)
        })
    }
 }
    return(
        <div className='add mt-5 '>
 <form className='app pt-5 mt- pb-5'  action='' onSubmit={handelSubmit} >
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label  rounded-0">Your Email</label>
    <input type="email" className="form-control rounded-0 w-100" id="exampleInputEmail1" name='email'
    placeholder='inter your email' onChange={HandelInput} />
           {error.email && <span className='text-danger'>{error.email}</span>}
 </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label ">Your Password</label>
    <input type="password" className="form-control rounded-0 w-100" id="exampleInputPassword1"
     name='password' placeholder='inter your password' 
      onChange={HandelInput } minLength='8' maxLength='15' />
     {error.password && <span className='text-danger'>{error.password}</span>}
  </div>
         <button type="submit"   className="btn btn-info  w-100 fw-bold ">SignIn</button>

</form>
</div>
 
    )

}