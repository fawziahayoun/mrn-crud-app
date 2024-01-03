import {  useState } from 'react';
import Axios from "axios";
import  '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebare';
function Addpositions() {
  const [possitionId, setPossitionId] = useState('');
  const [possitionName, setPossitionName] = useState('');
  
  const displaypositions = (e) => {
   // e.preventDefault()

    Axios.post("http://localhost:3006/createp",{
    possitionId: possitionId,
    possitionName: possitionName,
      
    }).then(()=> {
      console.log("succes");
    });
  }


  return (
    <>
    <Sidebar/>
    <div  className=' mt-5 add  '>  
  <div className=" container app mt-5  text-cEnter">
    <form className='' onSubmit={displaypositions}>
    <div className="mb-3">
    <label htmlFor="exampleInputId1" className="form-label">PositionId</label>
    <input type="number" className="form-control" id="exampleInputId1" aria-describedby="NameHelp"
   placeholder=' Enter PositionId' onChange={(e)=> {setPossitionId(e.target.value)}}/>
  </div>
  
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">PositionName</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp"
   placeholder=' Enter PositionName' onChange={(e)=> {setPossitionName(e.target.value)}}/>
  </div>
  
  
  <button type="submit"  className="btn btn-primary w-100 fw-bold mb-4">Add Position</button>
</form>

<Link to={"/showpositions"}     type="submit"   className="go text-white   btn  w-100 fw-bold">Show Positions</Link>
</div>

<div>
</div>
    </div>
    </>
  );
}

export default Addpositions;
