import { motion } from "framer-motion";

const experiences = [
  {
    title: "Progamming myself",
    company: "None",
    period: "2015 - NOW",
    description:
      "i have build many things, from C++ GUI applications to restful APIs in GO but now i have decided that i can confidently work and build safe real time projects",
  },
];

const education = [
  {
    degree: "Bachelors degree",
    institution: "Georgian state university",
    period: "2023 - 2027",
  },
  {
    degree: "FreeCodeCamp courses",
    institution: "online platform",
    period: "2024-2025",
  },
  {
    degree: "Cybersecurity CC",
    institution: "ISC square",
    period: "2023-2025",
  },
  {
    degree:"Computer Science",
    institution:"Saylor Degree",
    period:"2024-2025",
  },
  {
    degree:"CISCO networking academy",
    institution:"netacad.com",
    period:"2025-ongoing"
  },
  {
    degree: "self-taught",
    institution: "Home",
    period: "forever",
  },
  
];

const Experience = () => {
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
          <span className="text-red-700">Experience</span> & Education
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-red-700">
            Experience
          </h3>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-800"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 pl-12"
              >
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-700"></div>
                <h4 className="text-lg font-semibold">{exp.title}</h4>
                <p className="text-gray-400">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-red-700">Education</h3>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-800"></div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 pl-12"
              >
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-700"></div>
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <p className="text-gray-400">
                  {edu.institution} • {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
