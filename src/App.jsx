import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project';
import Servicey from './pages/Service/Service';


function App() {
 
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="https://guileless-marigold-6c0ebc.netlify.app//about" element={<About/>}/>
        <Route path="https://guileless-marigold-6c0ebc.netlify.app//project" element={<Project/>}/>
        <Route path='https://guileless-marigold-6c0ebc.netlify.app//service'element={<Service/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
