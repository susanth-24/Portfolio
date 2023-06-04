import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { projects } from "../constants";

import { staggerContainer } from '../utils/motion'
const ProjectCard = ({
  index,
  name,
  description,
  skills,
  image,
  link,
}) => {
    const isSmallDevice = window.innerWidth <= 768;
  const slideDirection = isSmallDevice
    ? "slide-right"
    : index % 2 === 0
    ? "slide-right"
    : "slide-left";
    const slideDelay = index * 0.2;
    
  return (
    <motion.div
      data-aos={slideDirection}
      
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#131f54] p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-60 h-60 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((tag) => (
            <p
              key={`${name}-${tag.skill}`}
              className={`text-[15px] text-bold ${tag.color}   bg-[#050816] rounded-full py-1 px-3`}
            >
              #{tag.skill}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing:'ease-in-sine',
      delay:100,
    });
  }, []);

  return (
    <motion.div 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show" 
    viewport={{once:true}}
    className="sm:px-16 px-6 sm:py-16 py-[200px] max-w-7xl mx-auto relative z-0 hash-span" id="projects" >
         
      <motion.div variants={textVariant()} >
        <h2 className="font-black text-[#02c3fc] lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] animate-bounce ">
          My Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.5, 2)}
          className="mt-4 text-[#ffffff] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills. Each project is briefly described with
          links to code repositories. It reflects my ability to work with different technologies
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10" data-aos="fade-up">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default  Projects

