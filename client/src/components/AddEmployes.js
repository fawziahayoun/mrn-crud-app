import { useEffect, useState } from 'react';
import Axios from "axios";
import  '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebare';
function AddEmployes() {
  const [name, setNmae] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [possition, setPossition] = useState('');
  const [wage, setWage] = useState('');
  const [countries, setCountries] = useState([]);
  const [possitions, setPossitions] = useState([]);



  useEffect(() => {
    Axios.get("http://localhost:3006/countries").then((data)=> {

      setCountries(data.data)
    });
  }, [])
  useEffect(() => {
    Axios.get("http://localhost:3006/possitions").then((data)=> {

      setPossitions(data.data)
    });
  }, [])
  

  const displayEmployes = (e) => {
   // e.preventDefault()

    Axios.post("http://localhost:3006/create",{
      name: name,
      email: email,
      password: password,
      phone: phone,
      age : age,
      country: country,
      possition: possition,
      wage : wage,
    }).then(()=> {
      console.log("succes");
    });
  }




  return (
    <>
    <Sidebar/>
    <div  className=' mt-5 add  '>  
  <div className=" container app mt-5  text-center">
    <form className='' onSubmit={displayEmployes}>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">name</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp"
   placeholder=' Enter Name' onChange={(e)=> {setNmae(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp"
   placeholder=' Enter Email' onChange={(e)=> {setEmail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="NameHelp"
   placeholder=' Enter Password' onChange={(e)=> {setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">phone</label>
    <input type="number" className="form-control" id="exampleInputPhone1" aria-describedby="NameHelp"
   placeholder=' Enter Phone' onChange={(e)=> {setPhone(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputage1" className="form-label">Your Age</label>
    <input type="number" className="form-control" id="exampleInputage1" aria-describedby="ageHelp"
     placeholder=' Enter  Age'   onChange={(e)=> {setAge(e.target.value)}}/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputCountry1" className="form-label">Country</label>
    <select type="text" className="form-control" id="exampleInputCountry1"   name='country' value={country}  onChange={(e)=> {setCountry(e.target.value)}}>

    {countries.length > 0 && countries.map((country, CI) => {

      return (
        <option  key={CI} value={country.countriesName}>{country.countriesName}</option>
      )

    })}
      
    </select>
  </div>



  <div className="mb-3">
    <label fhtmlFor="exampleInputPossition1" className="form-label">Possition</label>
    <select type="text" className="form-control" id="exampleInputPossition1"   name='possition' value={possition}  onChange={(e)=> {setPossition(e.target.value)}}>

    {possitions.length > 0 && possitions.map((position, CI) => {

      return (
        <option  key={CI} value={position.possitionName}>{position.possitionName}</option>
      )

    })}
      
    </select>
     </div>
     
  <div className="mb-3">
    <label htmlFor="exampleInputwage1" className="form-label">wage (year):</label>
    <input type="number" className="form-control" id="exampleInputwage1" placeholder='Enter Wage'  onChange={(e)=> {setWage(e.target.value)}}/>
  </div>
  
  <button type="submit"  className="btn btn-primary w-100 fw-bold mb-4">Add Emploey</button>
</form>

<Link to={"/show"}     type="submit"   className="go text-white   btn  w-100 fw-bold">show employes</Link>
</div>

<div>
</div>
    </div>
    </>
  );
}

export default AddEmployes;
