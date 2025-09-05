import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Go", level: 70 },
  { name: "Git", level: 80 },
  { name: "C#", level: 70 },
  { name: "java", level: 60 },
  { name: "expressJs", level: 80 },
  { name: "C++", level: 100 },
  { name: "Cyber security", level: 100 },
  { name: "ASP.NET", level: 20 },
  { name: "Python", level:100},
  {name:"flask",level:40},
  {name:"Jira",level:100},
  {name:"networking",level:20}
];

const Skills = () => {
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
          <span className="text-red-700">My</span> Skills
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-red-700">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-red-700 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
