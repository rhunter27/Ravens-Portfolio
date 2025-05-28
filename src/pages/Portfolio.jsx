// src/pages/Portfolio/Portfolio.jsx
import { useState, useEffect } from 'react';
import { Project } from '../../components/Project/Project';
import { getProjects, fetchGitHubRepos } from '../../api';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    // Load local projects
    setProjects(getProjects());
    
    // Fetch GitHub repos
    fetchGitHubRepos('yourUsername').then(repos => {
      setGithubRepos(repos);
    });
  }, []);

  return (
    <div className="portfolio-grid">
      {/* Local projects */}
      {projects.map((project, index) => (
        <Project key={`local-${index}`} {...project} />
      ))}
      
      {/* GitHub repos */}
      {githubRepos.map((repo, index) => (
        <Project 
          key={`gh-${index}`}
          title={repo.name}
          description={repo.description}
          technologies={repo.topics || []}
          githubLink={repo.html_url}
        />
      ))}
    </div>
  );
};