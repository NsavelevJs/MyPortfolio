// ProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        imageUrl: string;
        link: string;
        git: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
            <a href="#">
                <img className="rounded-t-lg" src={project.imageUrl} alt={project.title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                
                <a href={project.link} className="relative inline-block px-5 py-2 font-medium group m-3">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Website</span>
                </a>
                <a href={project.git} className="relative inline-block px-5 py-2 font-medium group m-3">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Github</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
