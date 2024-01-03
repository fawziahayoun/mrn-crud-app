
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaGrav} from "react-icons/fa";
import  '../App.css'
function Sidebar() {
  const [addd, setAddd] = useState(false);
   function handels()  {
    setAddd(addd => !addd);
  }
  const actives = addd ? 'act' : null;
 
return(
  
    <div className={`sidebar ${actives}    pt-5 text-center`}>
      <button className='open' onClick={handels}>< FaGrav size={30}/></button>
      <ul>
        <li></li>
        <li><Link to='/employes' className='link btn btn-warning mb-3 fs-4 ' >Add Employes</Link></li>
        <li><Link to='/show' className='link btn btn-warning fs-4 mb-3'>Show Employes</Link></li>
        <li><Link to='/show' className='link btn btn-warning fs-4 mb-3'>Delete employes</Link></li>
        <li><Link to='/addcountries' className='link btn btn-warning fs-4 mb-3'>Add Countries</Link></li>
        <li><Link to='/showcountries' className='link btn btn-warning fs-4 mb-3'>Show Countries</Link></li>

        <li><Link to='/addposition' className='link btn btn-warning fs-4 mb-3'>Add Positions</Link></li>
        <li><Link to='/showpositions' className='link btn btn-warning fs-4 mb-3'>Show Positions</Link></li>


      </ul>
    </div>

)
}

export default Sidebar;
