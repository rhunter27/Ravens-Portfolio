// src/api/github.js
export const fetchGitHubRepos = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      return await response.json();
    } catch (error) {
      console.error("GitHub API error:", error);
      return [];
    }
  };