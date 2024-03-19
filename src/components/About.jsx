import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* creating the cards */}
        <div
          options={{
            max: 45,
            scale: 2,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Get to know me! </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="text-justify">
          As an aspiring Web Developer with a Master's degree in Computer
          Application, I bring a strong foundation in JavaScript, TypeScript,
          Python, and Java, along with expertise in frameworks like React and
          Next.js. Committed to crafting efficient, scalable, and user-friendly
          solutions, I thrive on tackling real-world challenges.
        </p>
        <br />
        <p className="text-justify">
          Beyond coding, I'm passionate about PC gaming, drawn to its strategic
          elements and competitive nature. I also enjoy exploring hardware
          components and PC building. Additionally, I prioritize rigorous
          workouts for mental resilience and physical well-being, emphasizing
          personal growth.
        </p>
        <br />
        <p className="text-justify">
          Looking ahead, I'm excited about tackling new challenges, learning,
          and contributing to a dynamic team. Eager to embark on the journey of
          a professional Web Developer, I'm ready to bring my skills and
          enthusiasm to the table.
        </p>
      </motion.p>

      {/* Creating the cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
