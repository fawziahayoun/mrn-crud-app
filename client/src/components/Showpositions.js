import { useEffect, useState } from 'react';
import Axios from "axios";
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import Sidebar from './Sidebare';
import Swal from 'sweetalert2'


function Showpositions() {

  const [positionslist , setPositionslist] = useState([]);
  
  const [inputValue , setEnputValue] = useState('');


  useEffect(()=> {
    Axios.get("http://localhost:3006/possitions").then((response)=> {
      setPositionslist(response.data);
    });
  }, [])

  









  
  

  const deletePosition = (possitionId ,val) => {
    Swal.fire({
      title: ` Are You Sure To Delete  ${val.possitionName} ?`,
      showCancelButton: true


    }).then((data)=> {
      if(data.isConfirmed){
        Axios.delete(`http://localhost:3006/deletep/${possitionId}`).then((response) => {
          setPositionslist(positionslist.filter((val) => {
           return val.possitionId != possitionId
           
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
    <label htmlFor="exampleInputSerch" className="form-label">Sersh Positions</label>
    <input type="text" className="form-control serch" id="exampleInputSerch"
     placeholder='serch for employes ' onInput={ (e) => setEnputValue(e.target.value)} />
     <div className='icon'>< FaSearch  /></div>
     
  </div>
        <div >
            
<table className=' ms-5 ' >
<thead className='fs-4' >
<th>PositionId</th> <th>PositionName</th>  
 <th>Actions </th>
</thead>
<tbody>
{positionslist.filter((item) => {
  return inputValue.toLocaleLowerCase() === '' ? item : item.possitionName.toLocaleLowerCase().includes(inputValue)
}).map((val, key)=> {
  return (
  <tr className='col fs-4' key={val.possitionId}>
    <td>{val.possitionId}</td>
    <td>{val.possitionName}</td> 
    <td>
   <button className='btn btn-danger fs-4 me-2 ' onClick={() =>{deletePosition(val.possitionId, val)}}>Delete</button>
   <Link className='btn btn-primary text-center  fs-4 me-2  ' to={"/addcountries"}> Add </Link>
   </td>
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
export default  Showpositions;
