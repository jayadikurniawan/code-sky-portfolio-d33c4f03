
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../components/ProjectCard";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    // Simulating data fetch
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Airline Data Scraper",
        description: "Developed a web scraper to gather ticket price data from various airlines.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Python", "BeautifulSoup", "Pandas"],
        demo: "#",
        details: "This project involved creating a scalable web scraper to collect and analyze airline ticket pricing data. The system automates data collection from multiple airline websites, cleans the data, and exports it in a structured format for analysis."
      },
      {
        id: 2,
        title: "Flight Metrics Dashboard",
        description: "Visualized daily flight performance data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Tableau", "SQL"],
        demo: "#",
        details: "An interactive dashboard that displays key performance indicators for daily flight operations. The dashboard includes metrics such as on-time performance, delay causes, and operational efficiency visualized through charts and graphs."
      },
      {
        id: 3,
        title: "Passenger Behavior Analysis",
        description: "Transaction-based passenger behavior dashboard.",
        image: "https://images.unsplash.com/photo-1524669925868-dded3d5a847b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Python", "Streamlit"],
        demo: "#",
        details: "A data analysis tool that examines passenger booking patterns, preferences, and behaviors based on transaction data. The application presents insights through an interactive Streamlit dashboard with filtering capabilities."
      },
      {
        id: 4,
        title: "Airport Delay Predictor",
        description: "Machine learning model to predict flight delays.",
        image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Scikit-learn", "Jupyter Notebook"],
        demo: "#",
        details: "A machine learning algorithm that predicts flight delays based on historical data, weather conditions, and airport congestion. The model achieves 85% accuracy in predicting delays over 30 minutes."
      },
      {
        id: 5,
        title: "Drone Data Logger",
        description: "Drone flight data logging and visualization app.",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["React", "Firebase"],
        demo: "#",
        details: "A web application for drone operators to log flight data, track maintenance needs, and visualize flight paths. The app includes user authentication, real-time data synchronization, and exportable reports."
      },
      {
        id: 6,
        title: "Weather Data Integration",
        description: "Realtime weather data integration for flight monitoring systems.",
        image: "https://images.unsplash.com/photo-1506115694541-71f4c45671f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Node.js", "REST API"],
        demo: "#",
        details: "An API integration service that connects to multiple weather data providers and standardizes the data for use in flight monitoring systems. The service includes caching mechanisms and fallback options to ensure consistent data availability."
      },
      {
        id: 7,
        title: "KPI Dashboard Citilink",
        description: "Internal dashboard to analyze data team KPIs during internship.",
        image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Google Data Studio"],
        demo: "#",
        details: "A comprehensive dashboard developed during my internship at Citilink to track and visualize key performance indicators for the data team. The dashboard helped leadership monitor project progress and resource allocation."
      },
      {
        id: 8,
        title: "Travel Expense Analyzer",
        description: "Travel cost analysis tool using scraping techniques.",
        image: "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Python", "Matplotlib"],
        demo: "#",
        details: "A tool that analyzes travel expenses by scraping receipt data and categorizing expenses. The application generates visualizations and reports to help users understand their spending patterns and identify potential savings."
      }
    ];
    
    setProjects(projectsData);
  }, []);
  
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h1 className="section-title mb-12 text-center">Projects</h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                filter === "all" 
                ? "bg-skyblue text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
              <h3 className="text-xl font-semibold text-gray-700">No projects found</h3>
              <p className="text-gray-500 mt-2">Try selecting a different filter</p>
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
