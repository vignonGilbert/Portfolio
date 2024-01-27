import '../Home/Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Section1 from '../../Components/Section1/Section1'
import Skills from '../../Components/Section2/Skills'
import WorkExperience from '../../Components/Section3/WorkExperience'
import Footer from '../../Components/Footer/Footer'


const Home=() => {
 
  return (
    
      <>
   
      <Navbar/>
        <div className="container">
        
        <Section1/>
        <Skills/>
        <WorkExperience/>
        
     
         </div>
         
        <Footer/>
       
     </>
      
    
    
  );
};

export default Home
