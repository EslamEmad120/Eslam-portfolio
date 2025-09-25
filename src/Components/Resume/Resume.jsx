import React from 'react';
import { motion } from "framer-motion";
import img3 from '../../images/Route.jpg';
import img4 from '../../images/EZ-DK.jpg';
import img5 from '../../images/codsoft.jpeg';
import iti from '../../images/iti.jpeg'; // 👈 صورة الشهادة الجديدة

export default function Resume() {
  return (
    <>
      <section className="py-5" id="Resume">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold">Achievements and Certification</h3>
          <div className="row g-4">
            {[img3, img4, img5, iti].map((img, index) => (
              <motion.div
                className="col-12 col-sm-6 col-md-3"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="rounded shadow-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{ aspectRatio: "3/4" }} // 👈 يضمن نفس الأبعاد للكروت
                >
                  <img
                    src={img}
                    alt={`cert-${index}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
