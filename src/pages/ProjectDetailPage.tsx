
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Project } from "../components/ProjectCard";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

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
        details: "This project involved creating a scalable web scraper to collect and analyze airline ticket pricing data. The system automates data collection from multiple airline websites, cleans the data, and exports it in a structured format for analysis. Key features include:\n\n- Automated collection from 5+ major airline websites\n- Data cleaning and normalization\n- Price trend analysis\n- Export functionality to CSV, Excel and JSON\n- Scheduling capabilities for regular data collection\n\nThe tool has been used to analyze pricing patterns and helped identify optimal booking windows for different routes, resulting in cost savings for travel planning."
      },
      {
        id: 2,
        title: "Flight Metrics Dashboard",
        description: "Visualized daily flight performance data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Tableau", "SQL"],
        demo: "#",
        details: "An interactive dashboard that displays key performance indicators for daily flight operations. The dashboard includes metrics such as on-time performance, delay causes, and operational efficiency visualized through charts and graphs. The project required complex SQL queries to join data from multiple operational databases and Tableau for creating intuitive visualizations accessible to stakeholders across the organization."
      },
      {
        id: 3,
        title: "Passenger Behavior Analysis",
        description: "Transaction-based passenger behavior dashboard.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Python", "Streamlit"],
        demo: "#",
        details: "A data analysis tool that examines passenger booking patterns, preferences, and behaviors based on transaction data. The application presents insights through an interactive Streamlit dashboard with filtering capabilities. The analysis includes booking timing patterns, seat preferences, ancillary service purchases, and loyalty program utilization."
      },
      {
        id: 4,
        title: "Airport Delay Predictor",
        description: "Machine learning model to predict flight delays.",
        image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Scikit-learn", "Jupyter Notebook"],
        demo: "#",
        details: "A machine learning algorithm that predicts flight delays based on historical data, weather conditions, and airport congestion. The model achieves 85% accuracy in predicting delays over 30 minutes. The prediction system incorporates factors including historical airline performance, airport capacity, weather forecasts, and seasonal patterns."
      },
      {
        id: 5,
        title: "Drone Data Logger",
        description: "Drone flight data logging and visualization app.",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["React", "Firebase"],
        demo: "#",
        details: "A web application for drone operators to log flight data, track maintenance needs, and visualize flight paths. The app includes user authentication, real-time data synchronization, and exportable reports. Drone operators can record flight times, locations, battery performance, and maintenance issues through an intuitive interface optimized for both desktop and mobile use."
      },
      {
        id: 6,
        title: "Weather Data Integration",
        description: "Realtime weather data integration for flight monitoring systems.",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Node.js", "REST API"],
        demo: "#",
        details: "An API integration service that connects to multiple weather data providers and standardizes the data for use in flight monitoring systems. The service includes caching mechanisms and fallback options to ensure consistent data availability even when primary sources are unavailable. Weather data is critical for flight operations, and this integration provides a reliable, consistent source of information."
      },
      {
        id: 7,
        title: "KPI Dashboard Citilink",
        description: "Internal dashboard to analyze data team KPIs during internship.",
        image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Google Data Studio"],
        demo: "#",
        details: "A comprehensive dashboard developed during my internship at Citilink to track and visualize key performance indicators for the data team. The dashboard helped leadership monitor project progress and resource allocation. The KPI tracking system included metrics for project completion, data accuracy, system uptime, and team productivity."
      },
      {
        id: 8,
        title: "Travel Expense Analyzer",
        description: "Travel cost analysis tool using scraping techniques.",
        image: "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tools: ["Python", "Matplotlib"],
        demo: "#",
        details: "A tool that analyzes travel expenses by scraping receipt data and categorizing expenses. The application generates visualizations and reports to help users understand their spending patterns and identify potential savings. The system uses OCR technology to extract data from receipt images and machine learning to categorize expenses automatically."
      }
    ];
    
    const foundProject = projectsData.find(p => p.id === Number(id));
    
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-skyblue dark:border-skyblue-light"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Project Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects" className="button-primary">
              <ArrowLeft size={16} className="inline mr-2" /> Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/projects" className="text-skyblue dark:text-skyblue-light hover:text-skyblue-dark font-medium inline-flex items-center mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-fade-in opacity-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none text-gray-600 dark:text-gray-300 mb-8">
                <p className="text-lg font-medium mb-4">{project.description}</p>
                {project.details && project.details.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              {project.demo && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Demo</h3>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button-primary inline-flex items-center"
                  >
                    View Live Demo <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
