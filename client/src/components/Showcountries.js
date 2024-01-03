import { useEffect, useState } from 'react';
import Axios from "axios";
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import Sidebar from './Sidebare';
import Swal from 'sweetalert2'


function Showcountries() {

  const [countrieslist , setCountrieslist] = useState([]);
  
  const [inputValue , setEnputValue] = useState('');


  useEffect(()=> {
    Axios.get("http://localhost:3006/countries").then((response)=> {
      setCountrieslist(response.data);
    });
  }, [])

  









  
  

  const deleteCountry = (countriesId ,val) => {
    Swal.fire({
      title: ` Are You Sure To Delete  ${val.countriesName} ?`,
      showCancelButton: true


    }).then((data)=> {
      if(data.isConfirmed){
        Axios.delete(`http://localhost:3006/deletec/${countriesId}`).then((response) => {
          setCountrieslist(countrieslist.filter((val) => {
           return val.countriesId != countriesId
           
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
    <label htmlFor="exampleInputSerch" className="form-label">Sersh Countries </label>
    <input type="text" className="form-control serch" id="exampleInputSerch"
     placeholder='serch for employes ' onInput={ (e) => setEnputValue(e.target.value)} />
     <div className='icon'>< FaSearch  /></div>
     
  </div>
        <div >

        <table className=' ms-5 ' >
<thead className='fs-4' >
<th>CountryId</th> <th>CountryName</th>  
 <th>Actions </th>
</thead>
<tbody>
{countrieslist.filter((item) => {
  return inputValue.toLocaleLowerCase() === '' ? item : item.countriesName.toLocaleLowerCase().includes(inputValue)
}).map((val, key)=> {
  return (
  <tr className='col fs-4' key={val.countriesId}>
    <td>{val.countriesId}</td>
    <td>{val.countriesName}</td> 
    <td>
   <button className='btn btn-danger fs-4 me-2 ' onClick={() =>{deleteCountry(val.countriesId, val)}}>Delete</button>
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
export default  Showcountries;
