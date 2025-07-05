import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-red-800">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="text-red-700">Saba</span> Sajaia
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineer & Cybersecurity analyst
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Building exceptional digital experiences with modern technologies.
          Passionate about clean code, intuitive design, and efficient solutions
          with most secured conventions.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
