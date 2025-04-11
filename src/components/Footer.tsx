import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    const handleThemeChange = () => {
      const htmlTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(htmlTheme as "light" | "dark");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={theme === "dark" ? "/photo-uploads/logobismadark.png" : "/photo-uploads/logobisma.png"} 
                alt="Bhisma Adiyasa Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              Informatics Graduate Flying High with Technology and Aviation Passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 dark:text-gray-300 text-sm hover:text-skyblue dark:hover:text-skyblue-light transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 dark:text-gray-300 text-sm hover:text-skyblue dark:hover:text-skyblue-light transition-colors">About</Link></li>
                <li><Link to="/education" className="text-gray-600 dark:text-gray-300 text-sm hover:text-skyblue dark:hover:text-skyblue-light transition-colors">Education</Link></li>
                <li><Link to="/projects" className="text-gray-600 dark:text-gray-300 text-sm hover:text-skyblue dark:hover:text-skyblue-light transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 text-sm hover:text-skyblue dark:hover:text-skyblue-light transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300 text-sm">Bhisma Adiyasa</li>
                <li className="text-gray-600 dark:text-gray-300 text-sm">+62 812-1311-9995</li>
                <li className="text-gray-600 dark:text-gray-300 text-sm break-all">bhisma.adiyasa@gmail.com</li>
              </ul>
            </div>

            <div className="text-left md:text-center">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-3">Social</h4>
              <div className="flex space-x-4 md:justify-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-skyblue dark:hover:text-skyblue-light transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bhisma-adiyasa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-skyblue dark:hover:text-skyblue-light transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/bhismaadiyasa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-skyblue dark:hover:text-skyblue-light transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:bhisma.adiyasa@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-skyblue dark:hover:text-skyblue-light transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Bhisma Adiyasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;