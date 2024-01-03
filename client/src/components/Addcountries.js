import {  useState } from 'react';
import Axios from "axios";
import  '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebare';
function Addcountries() {
  const [countriesId, setCountriesId] = useState('');
  const [countriesName, setCountriesName] = useState('');
  
  const displayCountries = (e) => {
   // e.preventDefault()

    Axios.post("http://localhost:3006/createc",{
        countriesId: countriesId,
      countriesName: countriesName,
      
    }).then(()=> {
      console.log("succes");
    });
  }


  return (
    <>
    <Sidebar/>
    <div  className=' mt-5 add  '>  
  <div className=" container app mt-5  text-cEnter">
    <form className='' onSubmit={displayCountries}>
    <div className="mb-3">
    <label htmlFor="exampleInputId1" className="form-label">CountryId</label>
    <input type="number" className="form-control" id="exampleInputId1" aria-describedby="NameHelp"
   placeholder=' Enter CountryId' onChange={(e)=> {setCountriesId(e.target.value)}}/>
  </div>
  
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">CountryName</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp"
   placeholder=' Enter CountryName' onChange={(e)=> {setCountriesName(e.target.value)}}/>
  </div>
  
  
  <button type="submit"  className="btn btn-primary w-100 fw-bold mb-4">Add Country</button>
</form>

<Link to={"/showcountries"}     type="submit"   className="go text-white   btn  w-100 fw-bold">show Countries</Link>
</div>

<div>
</div>
    </div>
    </>
  );
}

export default Addcountries;
