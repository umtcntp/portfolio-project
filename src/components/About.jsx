import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full h-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full h-full green-pink-gradient p-px rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get to know me</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      {/* Metin blok */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-5xl text-secondary text-[20px] leading-[32px] !space-y-6"
      >
        <p>
          I’m a full-stack developer with a strong background in modern web development and software engineering.
          I enjoy building scalable, user-centric applications with clean architecture and a strong attention to detail.
        </p>

        <p>
          On the frontend, I create responsive and interactive interfaces using JavaScript, React, and Vue.js—focusing on
          well-structured components and smooth user experience. I’ve built complete products end-to-end, including an
          e-commerce platform where I handled both UI architecture and application logic.
        </p>

        <p>
          On the backend, I design and maintain RESTful APIs with Node.js, Express.js, and Spring, and build efficient data
          models with MongoDB and MySQL. I’ve also implemented authentication and access control using Amazon Cognito and Okta.
        </p>

        <p>
          I deploy and operate projects using Docker and DigitalOcean, and I’m comfortable working with code quality and team
          workflows using Git/GitHub, Agile (Scrum), and tooling like SonarQube.
        </p>

        <p>
          I currently work as a Freelance Python Tutor, teaching Python to students across different levels by creating
          interactive projects and adapting lessons to individual learning goals—an experience that strengthened my ability to
          explain complex topics clearly and collaborate effectively.
        </p>
      </motion.div>

      {/* Kartlarla arayı açtık */}
      <div className="!mt-16 w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
