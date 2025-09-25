import React from 'react'
import img2 from '../../images/2202757-removebg-preview.png'
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: "HTML", level: "95%", color: "#dd1b1b" },
    { name: "CSS", level: "86%", color: "#22a5e2" },
    { name: "JS", level: "76%", color: "#f8f535" },
    { name: "React js", level: "80%", color: "#1a94cc" },
    { name: "Bootstrap", level: "95%", color: "#bd1ad3" },
    { name: "Tailwind", level: "80%", color: "#22a5e2" },
    { name: "Next js", level: "70%", color: "#343434" },
  ]

  return (
    <>
      <section id="Skills">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* Skills Column */}
            <div className="col-md-6">
              <h3 className="mb-4">Proficiency</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <span>{skill.name}</span>
                  <motion.div
                    className="progress"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      style={{ backgroundColor: skill.color }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></motion.div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Image Column */}
            <div className="col-md-6 d-flex align-items-center">
              <motion.img
                src={img2}
                className="w-100"
                alt="Skills Illustration"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
