
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillIcon from "../components/SkillIcon";

const AboutPage = () => {
  const skills = ["Python", "SQL", "Looker Studio", "Tableau", "Figma", "HTML", "CSS", "JavaScript"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mb-12 text-center">About Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in opacity-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Aviation Enthusiast & Tech Professional</h2>
                <p className="text-gray-600 mb-4">
                  I am a recent Informatics Engineering graduate with a strong foundation in technology 
                  and a deep passion for aviation. My unique background combines technical expertise with 
                  an understanding of aviation systems, allowing me to approach problems with both logical precision 
                  and creative thinking.
                </p>
                <p className="text-gray-600 mb-4">
                  During my studies, I developed skills in data analysis, web development, 
                  and software engineering. My internship at Citilink gave me practical experience 
                  in applying these skills to real-world aviation challenges. I'm particularly 
                  interested in projects that combine technology with aviation systems.
                </p>
                <p className="text-gray-600">
                  Whether I'm analyzing flight data, developing web applications, or creating visualizations, 
                  I bring enthusiasm and dedication to every project. My goal is to contribute to innovations 
                  that enhance both technological systems and the aviation industry.
                </p>
              </div>
              
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/mukabisma.png" 
                    alt="Aviation enthusiast" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <blockquote className="text-white font-light italic text-lg">
                        "Keep flying, even if you're coding on the ground."
                      </blockquote>
                      <p className="text-skyblue-light text-sm mt-1">— My Life Motto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Favorite Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                {skills.map((skill, index) => (
                  <SkillIcon key={index} name={skill} />
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Personal Interests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Aviation</h3>
                  <ul className="space-y-2">
                    <li className="airplane-bullet text-gray-600">Flight simulation</li>
                    <li className="airplane-bullet text-gray-600">Aircraft design</li>
                    <li className="airplane-bullet text-gray-600">Aviation history</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Technology</h3>
                  <ul className="space-y-2">
                    <li className="airplane-bullet text-gray-600">Data visualization</li>
                    <li className="airplane-bullet text-gray-600">Web development</li>
                    <li className="airplane-bullet text-gray-600">Machine learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
