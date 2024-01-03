import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css'
import Sidebar from "./Sidebare";

export default function View(){
    const [allInfo, setAllInfo] = useState('');

    const {viewID} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:3006/show/${viewID}`).then((response)=> {
          setAllInfo(response.data);
        });
      }, [])

    

    return(
        
  <>
  <Sidebar/>
      <div  className=' mt-5 contain'>
      <div className="show container  text-center">
            <div className=" title text-center mt-5 mb-5 ">
             <h1> Ditailes Of Emploey</h1> 
             <p>here you can see all ditailes of the emploey that you want to see</p>  
             </div>
            
            <Link className='btn btn-warning  fs-4 fw-bold mb-5' to='/show'> Show employeslist </Link>
            <table className=' ms-5 ' >
<thead className='fs-4' >
<th>Id</th><th>Name</th> <th>Email</th> <th>Password</th> <th>Phone</th> <th>Age</th>
  <th>Possition</th> <th>Pountry</th> <th>Wage</th>   
</thead>
<tbody>
{allInfo &&  allInfo.map((val, key)=> {
  return (
  <tr className='col fs-4' key={val.id}>
        <td>{val.id}</td>
    <td>{val.name}</td>
    <td>{val.email}</td> <td>{val.password}</td> <td>{val.phone}</td>
    <td>{val.age}</td> <td>{val.possition}</td> <td>{val.country}</td> <td>{val.wage}</td>  
  </tr>
   )  
          
})}
</tbody>
</table>
        </div>
        </div>
 
        
        </>

    )
}