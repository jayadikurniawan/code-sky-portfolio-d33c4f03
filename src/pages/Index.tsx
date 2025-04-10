
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center aviation-bg">
          <div className="absolute inset-0 overflow-hidden">
            <div className="horizon-line absolute bottom-1/3 w-full"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Bhisma Adiyasa
                </h1>
                <p className="text-xl md:text-2xl text-skyblue font-light mb-6">
                  Informatics Graduate Flying High with Technology and Aviation Passion
                </p>
                <p className="text-gray-600 mb-8 max-w-md">
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
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-skyblue/20 to-skyblue/5 backdrop-blur-sm p-1">
                    <img 
                      src="/lovable-uploads/mukabisma.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white animate-float">
                    <img 
                      src="/lovable-uploads/071f3f1c-b596-41bc-a154-2a835e82576c.png" 
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title mb-12 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Airline Data Scraper" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">Airline Data Scraper</h3>
                  <p className="text-gray-600 text-sm mb-4">Web scraper for gathering ticket price data from airlines</p>
                  <Link 
                    to="/projects/1" 
                    className="text-skyblue hover:text-skyblue-dark font-medium text-sm inline-flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Featured Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Flight Metrics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">Flight Metrics Dashboard</h3>
                  <p className="text-gray-600 text-sm mb-4">Visualized daily flight performance data</p>
                  <Link 
                    to="/projects/2" 
                    className="text-skyblue hover:text-skyblue-dark font-medium text-sm inline-flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Featured Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Drone Data Logger" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">Drone Data Logger</h3>
                  <p className="text-gray-600 text-sm mb-4">Drone flight data logging and visualization app</p>
                  <Link 
                    to="/projects/5" 
                    className="text-skyblue hover:text-skyblue-dark font-medium text-sm inline-flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
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
