import React, { useContext } from 'react';
import './Resume.css';
import { DarkModeContext } from '../context/DarkModeContext';

const Resume = () => {
  const { darkMode } = useContext(DarkModeContext);

  const resumeContainerStyle = {
    backgroundColor: darkMode ? '#1a1a1a' : '#FFFFFF',
    color: darkMode ? '#FFFFFF' : '#333333',
  };

  const sectionStyle = {
    borderLeft: `4px solid ${darkMode ? '#B4A2F6' : '#FCE54D'}`,
  };

  const headingStyle = {
    color: darkMode ? '#ECAAFB' : '#B4A2F6',
  };

  const subHeadingStyle = {
    color: darkMode ? '#FCE54D' : '#989997',
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma'] },
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Developed responsive web applications using React and implemented state management solutions.',
    },
    {
      role: 'Web Developer Intern',
      company: 'Digital Creations',
      period: '2021 - 2022',
      description: 'Assisted in building and maintaining client websites with JavaScript and CSS frameworks.',
    },
  ];

  const education = [
    {
      degree: 'B.S. Computer Science',
      institution: 'State University',
      year: '2021',
    },
  ];

  return (
    <div className="resume-container" style={resumeContainerStyle}>
      <header className="resume-header">
        <h1 style={{ color: darkMode ? '#FCE54D' : '#B4A2F6' }}>Your Name</h1>
        <p style={{ color: darkMode ? '#F9FBC3' : '#989997' }}>Frontend Developer | UI/UX Enthusiast</p>
      </header>

      <div className="resume-content">
        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 style={subHeadingStyle}>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3 style={subHeadingStyle}>{exp.role}</h3>
              <p className="company-period">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 style={subHeadingStyle}>{edu.degree}</h3>
              <p className="institution-year">
                <span className="institution">{edu.institution}</span>
                <span className="year">{edu.year}</span>
              </p>
            </div>
          ))}
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Download</h2>
          <div className="download-section">
            <a 
              href="/path-to-your-resume.pdf" 
              download 
              className="download-button"
              style={{
                backgroundColor: darkMode ? '#B4A2F6' : '#FCE54D',
                color: darkMode ? '#1a1a1a' : '#333333'
              }}
            >
              Download PDF Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;