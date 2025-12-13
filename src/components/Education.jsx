import { motion } from "framer-motion";

const EducationData = [
  {
    year: 2018,
    degree: "SSC",
    gpa: "5.00",
    institute: "Rasulpur Hanif Bhuya High School, Nikly, Kishoregonj",
  },
  {
    year: 2020,
    degree: "HSC",
    gpa: "5.00",
    institute: "Abdul Kadir Mollah City College, Narshingdhi, Dhaka",
  },
  {
    year: "2021-Present",
    degree: "B.Sc in CSE (Final Year)",
    gpa: "N/A",
    institute: "Hajee Mohammad Danesh Science and Technology University, Dinajpur",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        <div className="relative border-l-2 border-primary ml-4">
          {EducationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <div className="absolute -left-5 w-4 h-4 bg-primary rounded-full border-2 border-gray-900"></div>
              <p className="text-sm text-gray-400">{edu.year}</p>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institute}</p>
              {edu.gpa && <p className="text-gray-400">GPA: {edu.gpa}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
