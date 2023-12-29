// ProjectPortfolio.tsx

import React from 'react';
import ProjectCard from './project-card';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  // Add other project details as needed
}

interface ProjectPortfolioProps {
  projects: Project[];
}

const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ projects }) => {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={index} project={project} />)}</div>;
};

export default ProjectPortfolio;