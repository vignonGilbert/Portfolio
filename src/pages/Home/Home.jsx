import '../Home/Home.css'
import Section1 from '../../Components/Section1/Section1'
import Skills from '../../Components/Section2/Skills'
import WorkExperience from '../../Components/Section3/WorkExperience'
import ContactComp from '../../Components/ContactComp/ContactComp'
import Footer from '../../Components/Footer/Footer'
import ProjectComp from '../../Components/Project/ProjectComp'
import ServiceComp from '../../Components/Service/ServiceComp'


const Home=() => {
 
  return (
    
      <>
   
    
        <div className="container">
        
        <section id="home"><Section1 /></section>
          <section id="about"><Skills /></section>
          <section id="projects"><WorkExperience /></section>
          <section id="projects"><ProjectComp /></section>
          <section id="services"><ServiceComp /></section>
          <section id="contact"> <ContactComp/> </section>
                
      
         </div>
         
        <Footer/>
       
     </>
      
    
    
  );
};

export default Home
