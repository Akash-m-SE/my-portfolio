import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { contactlinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

const ContactCard = ({ index, title, icon, redirectLink }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <a href={redirectLink} target="_blank" rel="noopener noreferrer">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="text-center p-0.5">{title}</div>
          {/* creating the cards */}
          <div
            options={{
              max: 45,
              scale: 2,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[10px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </div>
        </motion.div>
      </a>
    </Tilt>
  );
};

const MyLinks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}> My Links </p> */}
        {/* <h2 className={styles.sectionHeadText}> Contact Links. </h2> */}
        <h2 className={styles.sectionHeadText}> My Links.</h2>
      </motion.div>

      {/* Creating the cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {contactlinks.map((contact, index) => (
          <ContactCard key={contact.title} index={index} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MyLinks, "mylinks");
