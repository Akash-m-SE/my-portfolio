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
          I am an aspiring Frontend Developer with a recently acquired Master's
          degree in Computer Application. I possess a good knowledge of
          programming languages such as Python, Java and Javascript and
          frameworks like React and Node.js. Known for my rapid learning
          capabilities, I am committed to crafting efficient, scalable, and
          user-friendly solutions that address real-world challenges.
        </p>
        <br />
        <p className="text-justify">
          Beyond coding, my passion extends to the world of PC gaming. The
          strategic elements and competitive nature of gaming intrigues me,
          paralleled by my fascination with hardware components and PC building.
          Gaming for me is not just a leisure activity but a platform for
          embracing competition and solving intricate problems. In my leisure
          hours, I prioritize rigorous workouts to maintain a balanced
          lifestyle, emphasizing the importance of both mental resilience and
          physical well-being. I strongly advocate for personal growth,
          believing in the development of mental strength and physical vitality.
        </p>
        <br />
        <p className="text-justify">
          As I look forward to the future, I am excited about the prospect of
          tackling new challenges, absorbing valuable lessons, and seizing
          opportunities for continuous learning and professional growth. Ready
          to contribute my skills and enthusiasm to a dynamic team, I am eager
          to embark on the journey of a professional Frontend Developer.
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
