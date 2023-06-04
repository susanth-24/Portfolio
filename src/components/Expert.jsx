import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { expertise } from "../constants";
import { RenderTexture } from "@react-three/drei";

const SkillCard=({index,name,icon })=>{
    return(
        <Tilt className="xs:w-[250px] w-full ">
      <motion.div 
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full bg-[#424b76] p-[1px] rounded-[20px] shadow-card"> 
        <div
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-[#131f54] rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly
        items-center flex-col">
          <img src={icon} alt={name} className="w-16 h-16 object-contain"/>
          <h3 className="text-[#02c3fc] text-[17px] font-bold text-center bg-[#050816] rounded-full py-1 px-3">{name}</h3>
        </div>

      </motion.div>
      </Tilt>
    )
}

const Expert=()=>{
    return(
        <>
            <motion.div variants={textVariant()}>
            <h2 className="font-black text-[#02c3fc] lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2 animate-bounce">My Expertise.</h2>
            </motion.div>
            <motion.p variants={fadeIn("","",0.5,2)}
            className="mt-4 text-[#ffffff] text-[17px]
            max-w-3xl leading-[30px] ">
            I have Expertise with the following programming languages.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-7">
                {expertise.map((skill,index)=>(
                    <SkillCard key={skill.name} index={index}{...skill}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Expert,"expert")