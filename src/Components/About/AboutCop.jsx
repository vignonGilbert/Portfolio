import React from "react";
import './AboutCop.css';
import { useTranslation } from "react-i18next";

const AboutCop = () => {
  const { t } = useTranslation(); // clé pour les traductions

  return (
    <>
      <section className="header-image">
        <div className="me"> 
          <h2>{t("aboutMe")}</h2>
          <p>{t("jobTitle")}</p>
        </div>
      </section>

      <section className="about-container">
        <div className="about-content">
          <h2>{t("hello")}</h2>
          <p>{t("description")}</p>
          <ul>
            <li>{t("details.name")}</li>
            <li>{t("details.age")}</li>
            <li>{t("details.address")}</li>
            <li>{t("details.phone")}</li>
            <li>{t("details.email")}</li>
          </ul>
          <div className="btn">
            <a href="doc.pdf" download className="contact-btn">
              {t("downloadResume")}
            </a>
          </div>
        </div>

        <div className="about-img">
          <div className="image1">
            <img src="./assets/image/homme.jpg" alt=""/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCop;