
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export const projects = projectsData;

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const getFilteredProjects = () => {
    if (filter === "all") return projects;
    
    return projects.filter(project => 
      project.tools.some(tool => tool.toLowerCase() === filter.toLowerCase())
    );
  };
  
  const filteredProjects = getFilteredProjects();
  const uniqueTools = Array.from(
    new Set(projects.flatMap(project => project.tools.map(tool => tool.toLowerCase())))
  );

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1 pt-12">
        <section className="container mx-auto px-4 md:px-6 py-10">
          <h1 className="section-title mb-12 text-center">Projects</h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                filter === "all" 
                ? "bg-skyblue text-white" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            
            {uniqueTools.map((tool, index) => (
              <button 
                key={index}
                onClick={() => setFilter(tool)}
                className={`px-4 py-2 text-sm rounded-full transition-all capitalize ${
                  filter === tool
                  ? "bg-skyblue text-white" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Try selecting a different filter</p>
              <button 
                onClick={() => setFilter("all")}
                className="mt-4 button-outline"
              >
                Show All Projects
              </button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
