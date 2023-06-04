import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const About=()=>{
    return(
       <div >
         <motion.div variants={textVariant()}>
            <h2 className="font-black text-[#02c3fc] lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2 animate-bounce">About Me.</h2>
         </motion.div>
         <motion.p variants={fadeIn("","",0.5,2)}
         className="mt-4 text-[#ffffff] text-[17px]
         max-w-3xl leading-[30px] ">
            "I'm a sophomore at the Indian Institute of Technology Ropar, I'm interested in
             machine learning, deep learning, and software development. With a keen interest 
             in the field, I am constantly exploring the fascinating realms of AI. As an aero
             enthusiast, I have successfully built drones and am currently working on developing 
             an automated version, combining my passion for technology and aviation.  Outside of academics,
             I am an avid athlete, finding joy in pushing my physical limits and excelling in various sports"
         </motion.p>
       </div>
    )
}
export default SectionWrapper(About,"about")