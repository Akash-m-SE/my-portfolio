import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1.2,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* creating the cards */}
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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
        <h2 className={styles.sectionHeadText}> Get to know me! 😁</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="text-justify">
          As a dedicated Web Developer with a Master&apos;s degree in Computer
          Application, I specialize in full-stack development with a strong
          command of JavaScript, TypeScript, Python, and Java. My expertise
          spans building robust and scalable applications using modern
          frameworks like Next.js, Reactjs, and Node.js, while seamlessly
          integrating cloud solutions such as AWS, Docker, Kubernetes, and
          Terraform. I also have experience with microservices architectures to
          optimize performance and user experience.
        </p>
        <br />
        <p className="text-justify">
          Beyond coding, I&apos;m passionate about PC gaming, drawn to its
          strategic elements and competitive nature. I also enjoy exploring
          hardware components and PC building. Additionally, I prioritize
          rigorous workouts for mental resilience and physical well-being,
          emphasizing personal growth.
        </p>
        <br />
        <p className="text-justify">
          I&apos;m excited to continue pushing the boundaries of web
          development, eager to take on new challenges, and contribute to
          innovative projects within a dynamic team. My goal is to leverage my
          skills and experience to create impactful and efficient digital
          solutions.
        </p>
      </motion.div>

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
