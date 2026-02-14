import React from "react";
import './Section1.css'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t } = useTranslation(); // clé i18n

  return (
    <section className="Section1-container">
      <div className="Section1-content">
        <div className="animation">
          <ReactTyped
            strings={[
              t("introLine1"), 
              t("introLine2")
            ]}
            typeSpeed={90}
            backSpeed={50}
            loop
          />
        </div>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          {t("introDescription")}
        </motion.p>

        <div className="btn">
          <a href="/cv.pdf" download className="contact-btn">
            {t("hireMe")}
          </a>              
          <a href="#contact" className="contact-btn">
            {t("letsTalk")}
          </a>
        </div>
      </div>

      <div className="Section1-img">
        <div>
          <div className="tech-icon">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              src="./assets/image/electric_5935926.png"
              alt=""
            />
          </div>
          <div className="image">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src="./assets/image/aaaa.png"
              alt=""
            />
          </div>
        </div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <div className="tech-icon">
            <img src="./assets/image/css-3_5968242.png" alt=""/>
          </div>
          <div className="tech-icon">
            <img src="./assets/image/file_718127.png" alt=""/>
          </div>
          <div className="tech-icon">
            <img src="./assets/image/html-5_919827.png" alt=""/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;