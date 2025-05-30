
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1 pt-12">
        <section className="container mx-auto px-4 md:px-6 py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mb-12 text-center">Contact Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in opacity-0">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new projects, opportunities in aviation technology, 
                  or potential collaborations. Feel free to reach out using the form or contact me directly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-skyblue/10 dark:bg-skyblue/5 p-3 rounded-full mr-4">
                      <Mail className="w-5 h-5 text-skyblue dark:text-skyblue-light" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                      <a href="mailto:bhisma.adiyasa@gmail.com" className="text-skyblue dark:text-skyblue-light hover:underline">
                        bhisma.adiyasa@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue/10 dark:bg-skyblue/5 p-3 rounded-full mr-4">
                      <Phone className="w-5 h-5 text-skyblue dark:text-skyblue-light" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">Phone</h3>
                      <a href="tel:+6281213119995" className="text-skyblue dark:text-skyblue-light hover:underline">
                        +62 812-1311-9995
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-skyblue hover:text-white transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/bhisma-adiyasa/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-skyblue hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/bhismaadiyasa/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-skyblue hover:text-white transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="mailto:bhisma.adiyasa@gmail.com" 
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-skyblue hover:text-white transition-all duration-300"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send Me a Message</h2>
                
                <form action="https://formsubmit.co/dfa3b55bc561e1c44a932fd2cb46525d" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="button-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
