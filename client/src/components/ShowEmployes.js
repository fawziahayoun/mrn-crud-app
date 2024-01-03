import { useEffect, useState } from 'react';
import Axios from "axios";
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import Sidebar from './Sidebare';
import Swal from 'sweetalert2'


function ShowEmployes() {
  const [nwewage, setNweWage] = useState('');

  const [employeslist , setEmployeslist] = useState([]);
  
  const [inputValue , setEnputValue] = useState('');


  useEffect(()=> {
    Axios.get("http://localhost:3006/employes").then((response)=> {
      setEmployeslist(response.data);
    });
  }, [])

  









  
  const updateWage = (id) => {
Axios.put("http://localhost:3006/update",{wage : nwewage, id : id}).then((response)=>{
  setEmployeslist(employeslist.map((val) => {
    return  val.id == id ? {id : val.id, name : val.name ,age : val.age ,
       possition: val.possition, country: val.country, wage: nwewage } : val
  }))
})

  };

  const deleteEmployes = (id ,val) => {
    Swal.fire({
      title: ` Are You Sure To Delete  ${val.name} ?`,
      showCancelButton: true


    }).then((data)=> {
      if(data.isConfirmed){
        Axios.delete(`http://localhost:3006/delete/${id}`).then((response) => {
          setEmployeslist(employeslist.filter((val) => {
           return val.id != id
           
         }))
       })
      }
    })
   
  }

  return (
    <>
    <Sidebar/>
    <div  className=' mt-5 contain'>
      <div className="show container  text-center">

      <div className="mb-3 main-serch">
    <label htmlFor="exampleInputSerch" className="form-label">Sersh Possitions </label>
    <input type="text" className="form-control serch" id="exampleInputSerch"
     placeholder='serch for employes ' onInput={ (e) => setEnputValue(e.target.value)} />
     <div className='icon'>< FaSearch  /></div>
     
  </div>
        <div >

        <table className=' ms-5 ' >
<thead className='fs-4' >
<th>Name</th> <th>Age</th> <th>Country</th> <th>Position</th> <th>Wage</th>  
 <th>Actions </th>
</thead>
<tbody>
{employeslist.filter((item) => {
  return inputValue.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(inputValue)
}).map((val, key)=> {
  return (
  <tr className='col fs-4' key={val.id}>
    <td>{val.name}</td>
    <td>{val.age}</td><td>{val.country}</td> <td>{val.possition}</td>  <td>{val.wage}</td>  
    <td className='d-flex'> <input onChange={(e)=> {setNweWage(e.target.value)}} type="number" placeholder="edit wage"></input>
   <button className='edit me-2 ' onClick={() =>{updateWage(val.id)}}>Edit</button>
   <button className='btn btn-danger fs-4 me-2 ' onClick={() =>{deleteEmployes(val.id, val)}}>Delete</button>
   <Link className='btn btn-primary text-center  fs-4 me-2  ' to={"/employes"}> Add </Link>
   <Link className='btn btn-warning text-center text-white fs-4  ' to={`/show/${val.id}`}> View </Link></td>
  </tr>
   )  
          
})}
</tbody>
</table>
</div>
    </div>
    </div>
    </> 
  );
}
export default  ShowEmployes;
