// src/components/Project/Project.jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Project.css';

export const Project = ({ 
  title, 
  description, 
  image, 
  technologies = [], 
  githubLink, 
  liveLink,
  borderColor = '#B4A2F6' // Default to lavender
}) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      style={{ '--border-color': borderColor }}
    >
      <div className="project-image-container">
        <img 
          src={image} 
          alt={title} 
          className="project-image"
          loading="lazy"
        />
        <div className="project-links">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="project-link"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View live ${title} demo`}
              className="project-link"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="technology-tag"
                style={{ '--tag-color': borderColor }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};