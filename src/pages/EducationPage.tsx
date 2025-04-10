
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimelineItem from "../components/TimelineItem";

const EducationPage = () => {
  const educationItems = [
    {
      title: "BSc in Informatics Engineering",
      place: "XYZ University",
      date: "2020 - 2024",
      description: "Focused on data analysis, software engineering, and web development technologies. Graduated with honors."
    },
    {
      title: "Aviation School",
      place: "Aviation School in Bali",
      date: "2018 - 2019",
      description: "Studied aviation fundamentals, flight operations, and aviation safety protocols."
    },
    {
      title: "High School",
      place: "SMAK PENABUR",
      date: "2015 - 2018",
      description: "Science focus with computer science electives. Participated in programming competitions."
    }
  ];

  const experienceItems = [
    {
      title: "Data Analyst Intern",
      place: "Citilink",
      date: "2023",
      description: "Analyzed flight performance metrics, created data visualizations, and helped develop internal reporting dashboards for the operations department."
    },
    {
      title: "KKN Village Volunteering Program",
      place: "Rural Development Initiative",
      date: "2022",
      description: "Implemented technology education programs in rural areas. Taught basic computer skills and helped establish internet connectivity solutions."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mb-12 text-center">Education & Experience</h1>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-skyblue text-white rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                </div>
                Education
              </h2>
              
              <ol className="relative border-l border-gray-200 ml-4">
                {educationItems.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    title={item.title}
                    place={item.place}
                    date={item.date}
                    description={item.description}
                  />
                ))}
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-skyblue text-white rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Experience
              </h2>
              
              <ol className="relative border-l border-gray-200 ml-4">
                {experienceItems.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    title={item.title}
                    place={item.place}
                    date={item.date}
                    description={item.description}
                  />
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducationPage;
