
import AddEmployes from './components/AddEmployes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowEmployes from './components/ShowEmployes';
import View from './components/view';
import Home from './components/Home';
import Login from './components/login';
import { useState } from 'react';
import Addcountries from './components/Addcountries';
import Addpositions from './components/Addpositions';
import Showcountries from './components/Showcountries'
import Showpositions from './components/Showpositions'

function App() {

  const [addd, setAddd] = useState(false);

   function handels()  {
    setAddd(addd => !addd);

  }
  const actives = addd ? 'act' : null;
 
return(
  <div className='app'>
  <Router>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Login/>}/>
    </Routes>
    <div className=''>
     
    <Routes>
     
    <Route path='/home'  element={<Home/>}/>
    <Route path='/employes'  element={<AddEmployes/>}/>
    <Route path='/show'    element={<ShowEmployes/>}/>
    <Route path='/show/:viewID'   element={<View/>}/>
    <Route path='/addcountries'   element={<Addcountries/>}/>
    <Route path='/addposition'   element={<Addpositions/>}/>
    <Route path='/showcountries'   element={<Showcountries/>}/>
    <Route path='/showpositions'   element={<Showpositions/>}/>




    </Routes>

    </div>

    



  </Router>
  
  
  
  </div>

)
}

export default App;
