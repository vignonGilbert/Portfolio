import React from "react";
import './SkillInfoCard.css';
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types"; // <-- importer PropTypes

const SkillInfoCard = ({ heading, skills }) => {
  const { t } = useTranslation();

  return (
    <div className="skills-info-card">
      <h6>{t(`skills.${heading.replace(/\s+/g, "")}`)}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{t(`skills.${item.skill.replace(/\s+/g, "")}`)}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// <-- Ajouter la validation des props
SkillInfoCard.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SkillInfoCard;