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
        <p>
          I am a student who is completing Master's degree in Computer
          Application. I possess a good knowledge of programming languages such
          as Python, Java, and Javascript, and frameworks like React and
          Node.js. One of my defining traits is my ability to learn quickly and
          effectively. My true passion lies in crafting solutions that are not
          only efficient and scalable but also user-friendly, providing
          real-world solutions to everyday challenges.
        </p>
        <br />
        <p>
          Beyond the technical sphere, I am an ardent PC gamer. The virtual
          worlds and competitive challenges within gaming captivate me, and I am
          equally intrigued by the intricacies of hardware components and PC
          building. For me, gaming isn't just a pastime—it's a platform for
          embracing competition and solving complex problems. During my leisure
          hours, you'll find me engrossed in gaming escapades or engaging in
          rigorous workouts to maintain a well-rounded lifestyle. My firm belief
          is that achieving balance means nurturing both mental resilience and
          physical well-being.
        </p>
        <br />
        <p>
          I am a staunch advocate for personal growth, advocating for the
          development of mental strength and physical vitality. I eagerly
          anticipate the future, eager to tackle the challenges, absorb the
          lessons, and seize the opportunities that come my way. I am prepared
          to embrace the journey of continuous learning, personal growth, and
          the excitement of facing new challenges.
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
