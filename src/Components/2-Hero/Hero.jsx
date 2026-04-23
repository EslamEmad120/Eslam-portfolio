import React from 'react';  
import Eslam from '../../images/Eslam-Emad.png';  
import lap from '../../images/lap.png';  
import Typewriter from 'typewriter-effect';  
// import cv from '../../../public/CV.pdf'
// /public/CV.pdf

export default function Hero() {  
  return (  
    <>  
      <section className="" id="Home">  
        <div className="container mx-auto">  
          <div className="row d-flex justify-content-center">  
            <div className="col-md-6 justify-content-center align-items-center">  
              <img src={Eslam} alt="" width="100px" className="Eslam" />  
              <h1></h1>  
              <h1>  
                <Typewriter  
                  options={{  
                    strings: ["Hi, I'm Eslam Emad"],  
                    autoStart: true,  
                    loop: true,  
                  }}  
                />  
              </h1>  
              <p className=''>  
                A Passionate Front-End Developer having an experience of building Web applications  
                With Javascript / React js / HTML/ CSS / Bootstrap / and some other cool libraries and framework  
              </p>  
              <div className="icons py-2">  
                {/* <!-- github linkedin gmail facebook whatsapp --> */}  
                <a href="https://github.com/IslamImad12"><i className="fa-brands fa-github px-2"></i></a>  
                <a href="https://www.linkedin.com/in/eslam-emad-a87291225/"><i className="fa-brands fa-linkedin px-2"></i></a>  
                <a href="https://www.upwork.com/freelancers/~01b970568bae42abfb"><i className="fa-brands fa-square-upwork px-2"></i></a>  
                <a href="https://www.facebook.com/profile.php?id=100004921279286"><i className="fa-brands fa-facebook px-2"></i></a>  
                <a href="https://wa.me/201143999343" target="_blank" rel="noopener noreferrer"> 
                  <i className="fa-brands fa-whatsapp px-2"></i> 
                </a>  
              </div>  
              <div className="buttons">  
                <a className="btn btn-warning" href="#contact">Contact</a>  
               <a   
  className="btn btn-outline-warning mx-1"   
  id="downloadBtn"   
  href="/CV(8).pdf"   
  download="Eslam_Emad_CV.pdf"   
>   
  SEE MY RESUME   
</a>


              </div>  
            </div>  
            <div className="col-md-6 d-flex justify-content-center align-items-center">  
              <img src={lap} alt="" />  
            </div>  
          </div>  
        </div>  
      </section>  
    </>  
  );  
}  
