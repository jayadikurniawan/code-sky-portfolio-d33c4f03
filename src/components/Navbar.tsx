
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || 
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add event listener for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const htmlTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(htmlTheme as "light" | "dark");
    };

    // Set up a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Education", path: "/education" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent dark:bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={theme === "dark" ? "/photo-uploads/logobismadark.png" : "/photo-uploads/logobisma.png"} 
              alt="Bhisma Adiyasa Logo" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-skyblue relative ${
                  isActive(item.path)
                    ? "text-skyblue dark:text-skyblue-light"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="relative">
                  {item.title}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-skyblue dark:bg-skyblue-light rounded-full" />
                  )}
                </span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-skyblue dark:hover:text-skyblue-light transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-base font-medium transition-all duration-300 hover:text-skyblue ${
                  isActive(item.path) ? "text-skyblue dark:text-skyblue-light" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
