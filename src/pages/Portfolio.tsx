

import ProjectPortfolio from '../components/project-portfolio';

interface PortfolioProps {
  projects: Array<{
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    git: string;
  }>;
}

function Portfolio({ projects }: PortfolioProps) {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-bold mb-4">My Portfolio</h1>
      <ProjectPortfolio projects={projects} />
    </div>
  );
}

export default Portfolio;
