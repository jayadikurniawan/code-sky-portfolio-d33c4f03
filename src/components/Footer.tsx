
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/photo-uploads/071f3f1c-b596-41bc-a154-2a835e82576c.png" 
                alt="Bhisma Adiyasa Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Informatics Graduate Flying High with Technology and Aviation Passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 text-sm hover:text-skyblue transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 text-sm hover:text-skyblue transition-colors">About</Link></li>
                <li><Link to="/education" className="text-gray-600 text-sm hover:text-skyblue transition-colors">Education</Link></li>
                <li><Link to="/projects" className="text-gray-600 text-sm hover:text-skyblue transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-600 text-sm hover:text-skyblue transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">Bhisma Adiyasa</li>
                <li className="text-gray-600 text-sm">+62 812-1311-9995</li>
                <li className="text-gray-600 text-sm break-all">bhisma.adiyasa@gmail.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Social</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-skyblue transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bhisma-adiyasa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-skyblue transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/bhismaadiyasa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-skyblue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:bhisma.adiyasa@gmail.com" className="text-gray-600 hover:text-skyblue transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Bhisma Adiyasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
