 import logo from '../assets/emp.jpg'
 import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
 
 export default function Navbar(){
  const hitory = useNavigate()
  let user = localStorage.getItem('cool');
  const  logout =() => {
    localStorage.clear();
    hitory('/');
  }
    return(
        <>
        <nav class="navbar may-nav navbar-expand-lg  ">
        <div class="container">
          <a class="navbar-brand" href="#"><img class="img-fluid image" src={logo} alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 ">
            {
                
              localStorage.getItem("cool") ?
              <>  
              <li class="nav-item">
              <Link to="/home" class="nav-link   " aria-current="page" href="#">home</Link>
              
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link   " aria-current="page" href="#" onClick={logout}>LogOut</Link>
              
            </li>
            
            </>

        : <> <li class="nav-item">
                <Link to="/" class="nav-link   " aria-current="page" href="#">Login</Link>
              </li>
             
              
              
              </> }
            </ul>
            
          </div>
        </div>
      </nav>
        
        
        </>
    )
 }

 