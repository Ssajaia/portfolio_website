import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Bochka Data structure",
    description:
      "Fully functional Data structure which can be used like List written in C#.",
    image: "/bochka.png",
    link: "https://github.com/Ssajaia/Bochka_DS",
  },
  {
    id: 2,
    name: "Nstring",
    description:
      "new String variant written in C#, which includes methods and paradigms which real string deosn't have.",
    image: "/nstring.png",
    link: "https://github.com/Ssajaia/CustomStringClass",
  },
  {
    id: 3,
    name: "Bookstore API",
    description:
      "this API is written in GO and can be used for bookstore website.",
    image: "/bookstore.jpg",
    link: "https://github.com/Ssajaia/go-bookstore",
  },
  {
    id: 4,
    name: "Casino website",
    description: "casino like website, written in pure js/html/css ",
    image: "/casino.jpg",
    link: "https://github.com/Ssajaia/casino",
  },
  {
    id: 5,
    name: "github activity tracker",
    description:
      "github activity tracker is CLI tool which can show, recent merges or commits for desired user, it is written in GO",
    image: "/git-tracker.jpg",
    link: "https://github.com/Ssajaia/Github-activity-tracker",
  },
  {
    id: 6,
    name: "movie API",
    description:
      "basic movie API written in GO using gorrila/mux including CRUD operations",
    image: "/movie.png",
    link: "https://github.com/Ssajaia/Movies-API-with-CRUD-functions",
  },
  {
    id: 7,
    name: "recipe App",
    description: "GUI app created with Jframe using java.",
    image: "/recipe-app.jpg",
    link: "https://github.com/Ssajaia/Recipe-app",
  },
  {
    id: 8,
    name: "todo app",
    description:
      "basic task managment application integrated in CLI using pure GO",
    image: "/todo.png",
    link: "https://github.com/Ssajaia/Task_tracker_CLI",
  },
  {
    id: 9,
    name: "verification API",
    description:
      "provides verification system for logging website using nodeJS and expressJS",
    image: "/verification.jpg",
    link: "https://github.com/Ssajaia/Task_tracker_CLhttps://github.com/Ssajaia/verificationAPI",
  },
  {
    id: 10,
    name: "weather App",
    description:
      "working C# application which uses openWeather API to track weather in region you provide",
    image: "/weather.png",
    link: "https://github.com/Ssajaia/Weather-App",
  },
  {
    id: 11,
    name: "DateTime data structure",
    description:
      "C++ class which can be used to commit operations on Time, such as calculating time between two date.",
    image: "/dateTime.svg",
    link: "https://github.com/Ssajaia/DateTime.git",
  },
  {
    id:12,
    name:"quotes API",
    description:"API created in nodejs using express, which provides database connection",
    image:"/quotes.jpg",
    link:"https://github.com/Ssajaia/Quote_managment_System.git",
  },
  {
    id:13,
    name:"NodeJs auth system",
    description:"backend system to ensure safe log in/out and registration on website.",
    image:"/auth.png",
    link:"https://github.com/Ssajaia/Authentication-API.git"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-red-700">My</span> Projects
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto"></div>
      </motion.div>

      <div
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-all z-10"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-all z-10"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-red-700" : "bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
