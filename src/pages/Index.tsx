
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "./ProjectsPage";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center aviation-bg dark:bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="horizon-line absolute bottom-1/3 w-full"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
              <div className="order-2 md:order-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  Bhisma Adiyasa
                </h1>
                <p className="text-xl md:text-2xl text-skyblue dark:text-skyblue-light font-light mb-6">
                  Informatics Graduate Flying High with Technology and Aviation Passion
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                  Combining the precision of code with the freedom of flight. Building digital experiences that soar above expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/projects" className="button-primary">
                    View My Projects <ArrowRight size={16} className="inline ml-1" />
                  </Link>
                  <Link to="/contact" className="button-outline">
                    Contact Me
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in opacity-0">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-skyblue/20 to-skyblue/5 dark:from-skyblue/10 dark:to-skyblue/5 backdrop-blur-sm p-1">
                    <img 
                      src="/photo-uploads/mukabisma.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-4 border-white dark:border-gray-800 animate-float">
                    <img 
                      src="/photo-uploads/logobisma.png" 
                      alt="Logo" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title mb-12 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 card-hover animate-fade-in opacity-0" style={{ animationDelay: `${0.3 + (project.id * 0.1)}s` }}>
                  <div className="h-48 bg-gray-200 dark:bg-gray-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="text-skyblue dark:text-skyblue-light hover:text-skyblue-dark font-medium text-sm inline-flex items-center gap-1"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/projects" className="button-outline">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
