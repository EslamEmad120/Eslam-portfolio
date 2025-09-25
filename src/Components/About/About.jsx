import React from 'react';
import { motion } from "framer-motion";
import img1 from '../../images/4421964-removebg-preview.png';

export default function About() {
  return (
    <>
      <div className="container py-5" id="About">
        <div className="row d-flex justify-content-center align-items-center text-center text-md-start">
          
          {/* الصورة */}
          <motion.div 
            className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={img1} alt="about-img" width="300px" className="img-fluid" />
          </motion.div>
          
          {/* النص */}
          <motion.div 
            className="col-12 col-md-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold mb-3">What I Do</h3>
            <p className="mb-2">🚀 CRAZY FRONT END DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK</p>
            <p className="mb-2">💻 Develop highly interactive Front-End / User Interface for your web applications</p>
            <p className="mb-2">⚛️ Develop websites with React.js</p>
            <p className="mb-2">🎨 Design websites with Tailwind & Bootstrap</p>
          </motion.div>
          
        </div>
      </div>
    </>
  );
}
