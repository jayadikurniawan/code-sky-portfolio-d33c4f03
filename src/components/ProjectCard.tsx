
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  demo: string;
  details?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm card-hover opacity-0 animate-fade-in" style={{ animationDelay: `${project.id * 0.1}s` }}>
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link 
            to={`/projects/${project.id}`} 
            className="text-skyblue hover:text-skyblue-dark dark:text-skyblue-light dark:hover:text-skyblue font-medium text-sm inline-flex items-center gap-1 transition-colors"
          >
            View Details <ArrowRight size={16} />
          </Link>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-skyblue dark:hover:text-skyblue-light transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
