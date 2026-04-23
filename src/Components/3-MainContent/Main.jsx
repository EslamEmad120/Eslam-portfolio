import React, { useState } from 'react'; 
import { motion } from "framer-motion";  
import freshcart from '../../images/freshcart.jpg'; 
import Taste from '../../images/Another-taste.jpeg'; 
import toDoList from '../../images/to-do list.jpg'; 
import Prayer from '../../images/Prayer.jpeg'; 
import Daniel from '../../images/Daniel.jpeg'; 
import Devdolio from '../../images/Devdolio.jpeg'; 
import Bookmark from '../../images/Bookmark.jpeg'; 
import TechnoMark from '../../images/TechnoMark.png';  
import Daar from '../../images/Daar.png';   
import ticktory from '../../images/ticktory.png';   // 👈 صورة المشروع الجديد
import social from '../../images/social.png';   // 👈 صورة المشروع الجديد
import alaa from '../../images/alaa.png';   // 👈 صورة المشروع الجديد

export default function Main() { 
  const [currentActive, setCurrentActive] = useState('all'); 
   
  const myProjects = [ 
    {projectTitle: 'fresh cart', category: 'react', imgPath: freshcart ,demo:'https://e-commerce-01-mu.vercel.app/'}, 
    {projectTitle: 'alaa hamed platform', category: 'react', imgPath: alaa ,demo:'https://dawah-frontend.vercel.app/'}, // 👈 المشروع الجديد
    {projectTitle: 'Ticktory', category: 'react', imgPath: ticktory ,demo:'https://ticketory.netlify.app/'}, // 👈 المشروع الجديد
    // {projectTitle: 'social media', category: 'react', imgPath: social ,demo:'https://social-xi-three.vercel.app/'}, // 👈 المشروع الجديد
    {projectTitle: 'TechnoMark', category: 'react', imgPath: TechnoMark ,demo:'https://techno-mark.vercel.app/'}, 
    {projectTitle: 'Another Taste', category: 'react', imgPath: Taste ,demo:'https://another-taste.vercel.app/'}, 
    {projectTitle: 'to do list', category: 'js', imgPath: toDoList ,demo:'https://islamimad12.github.io/To-Do-List/'}, 
    {projectTitle: 'prayer', category: 'react', imgPath: Prayer ,demo:'https://prayer-now.vercel.app/'}, 
    {projectTitle: 'Daniel', category: 'css', imgPath: Daniel ,demo:'https://islamimad12.github.io/daniel/'}, 
    {projectTitle: 'Devfolio', category: 'css', imgPath: Devdolio ,demo:'https://islamimad12.github.io/devfolio/'}, 
    {projectTitle: 'Bookmark', category: 'js', imgPath: Bookmark ,demo:'https://islamimad12.github.io/Bookmark-app/'}, 
    {projectTitle: 'Conservation-report', category: 'js', imgPath: Daar ,demo:'https://conservation-report.vercel.app/'}, 
  ]; 
 
  const [arr, setArr] = useState(myProjects); 
 
  return ( 
    <> 
      <div id='Projects'> 
        <div className="container"> 
          <div className="row"> 
            <div className="col-md-2 mb-3"> 
              <button 
                onClick={() => { 
                  setArr(myProjects); 
                  setCurrentActive('all'); 
                }} 
                className={`btn btn-danger btn-proj w-100 mb-2 ${currentActive === 'all' ? 'active' : ''}`} 
              > 
                All Projects 
              </button> 
              <button 
                onClick={() => { 
                  const newArr = myProjects.filter((item) => item.category === 'css'); 
                  setArr(newArr); 
                  setCurrentActive('css'); 
                }} 
                className={`btn btn-danger btn-proj w-100 mb-2 ${currentActive === 'css' ? 'active' : ''}`} 
              > 
                HTML & CSS 
              </button> 
              <button 
                className={`btn btn-danger btn-proj w-100 mb-2 ${currentActive === 'js' ? 'active' : ''}`} 
                onClick={() => { 
                  const newArr = myProjects.filter((item) => item.category === 'js'); 
                  setArr(newArr); 
                  setCurrentActive('js'); 
                }} 
              > 
                JavaScript 
              </button> 
              <button 
                className={`btn btn-danger btn-proj w-100 ${currentActive === 'react' ? 'active' : ''}`} 
                onClick={() => { 
                  const newArr = myProjects.filter((item) => item.category === 'react'); 
                  setArr(newArr); 
                  setCurrentActive('react'); 
                }} 
              > 
                React & Next 
              </button> 
            </div> 
            <div className="col-md-10"> 
              <div className="row g-4"> 
                {arr.map((item, index) => ( 
                  <motion.section 
                    className="col-12 col-sm-6 col-lg-4" 
                    key={item.imgPath}
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                  > 
                    <motion.article 
                      className="card h-100 shadow-sm" 
                      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }} 
                      transition={{ type: "spring", stiffness: 200 }} 
                    > 
                      <img 
                        src={item.imgPath} 
                        alt={item.projectTitle} 
                        className="card-img-top img-fluid" 
                        style={{objectFit: 'cover', height: '200px'}} 
                      /> 
                      <div className="card-body d-flex flex-column"> 
                        <h5 className="card-title">{item.projectTitle}</h5> 
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet.</p> 
                        <a 
                          className="btn btn-outline-danger mt-auto" 
                          href={item.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                        > 
                          Demo 
                        </a> 
                      </div> 
                    </motion.article> 
                  </motion.section> 
                ))} 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </> 
  ); 
}
