import React from 'react';
import teamPhoto from './team.jpg';
import './About.css';
import { DarkModeContext } from '../context/DarkModeContext';

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  const aboutContainerStyle = {
    backgroundColor: darkMode ? '#1a1a1a' : '#FFFFFF',
    color: darkMode ? '#FFFFFF' : '#333333',
  };

  const headingStyle = {
    color: darkMode ? '#ECAAFB' : '#B4A2F6',
  };

  const subHeadingStyle = {
    color: darkMode ? '#FCE54D' : '#989997',
  };

  const graphicBoxStyle = {
    backgroundColor: darkMode ? '#2a2a2a' : '#F9FBC3',
  };

  return (
    <div className="about-page" style={aboutContainerStyle}>
      <div className="creative-header">
        <div className="creative-title">THEMEHUNK</div>
        <div className="creative-subtitle">Estelle Darcy</div>
      </div>

      <div className="about-container">
        <div className="graphic-elements">
          <div className="graphic-box" style={graphicBoxStyle}>
            <span>Creative.</span>
          </div>
          <div className="graphic-box" style={{ backgroundColor: darkMode ? '#3a3a3a' : '#FCE54D' }}>
            <span>20</span>
          </div>
          <div className="graphic-box" style={{ backgroundColor: darkMode ? '#4a4a4a' : '#ECAAFB' }}>
            <span>ABOUT</span>
            <span>US</span>
          </div>
          <div className="graphic-box" style={{ backgroundColor: darkMode ? '#3a3a3a' : '#FCE54D' }}>
            <span>26</span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h2 style={headingStyle}>Our Story</h2>
            <div className="image-container">
              <img src={teamPhoto} alt="Our team" className="team-photo" />
              <div className="image-overlay" style={{ backgroundColor: darkMode ? 'rgba(180, 162, 246, 0.7)' : 'rgba(252, 229, 77, 0.7)' }}></div>
            </div>
            <p>Raven Hunter is a versatile professional with 13+ years in sales and customer service, now expanding into technical fields through completion of Rice University's 6-month coding bootcamp. Combines extensive retail expertise (jewelry, fashion, healthcare) with newly acquired programming skills to bridge business and technology. Proven track record in driving sales (achieved 10% increase at Zales) while developing technical competencies in full-stack development, data analysis, and system troubleshooting.

Enhanced Technical Profile:

    Rice University Coding Bootcamp Graduate: 6-month intensive program in JavaScript, Python, and full-stack development

    Technical Translation: Ability to communicate complex concepts between technical and non-technical stakeholders

    Systems Thinking: Enhanced problem-solving skills applied to sales analytics and inventory management

    Digital Transformation: Understanding of how to leverage technology to optimize sales processes and customer experiences

Key Strengths Now Include:

    Technical Sales: Ability to demo and troubleshoot digital products/services

    Data-Driven Selling: Using analytics to identify sales opportunities

    Cross-Functional Collaboration: Works effectively with both business and technical teams

    Agile Methodology: Experience with iterative development processes</p>
          </div>

          <div className="about-values">
            <h3 style={subHeadingStyle}>Our Values</h3>
            <ul className="values-list">
              <li>
                <span className="value-icon" style={{ backgroundColor: darkMode ? '#B4A2F6' : '#ECAAFB' }}>✓</span>
                <span className="value-text">Customer satisfaction</span>
              </li>
              <li>
                <span className="value-icon" style={{ backgroundColor: darkMode ? '#B4A2F6' : '#ECAAFB' }}>✓</span>
                <span className="value-text">Innovation</span>
              </li>
              <li>
                <span className="value-icon" style={{ backgroundColor: darkMode ? '#B4A2F6' : '#ECAAFB' }}>✓</span>
                <span className="value-text">Integrity</span>
              </li>
              <li>
                <span className="value-icon" style={{ backgroundColor: darkMode ? '#B4A2F6' : '#ECAAFB' }}>✓</span>
                <span className="value-text">Creativity</span>
              </li>
            </ul>

            <button className="learn-more-btn" style={{ 
              backgroundColor: darkMode ? '#B4A2F6' : '#FCE54D',
              color: darkMode ? '#1a1a1a' : '#333333'
            }}>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;