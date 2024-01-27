import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project';
import Service from './pages/Service/Service';


function App() {
 
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path='/service'element={<Service/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
