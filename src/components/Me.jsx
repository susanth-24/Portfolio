import {motion} from 'framer-motion';
import { Robot } from './canvas'; 
import { arrow } from '../assets';
import Typewriter from "typewriter-effect";
import { fadeIn,textVariant } from "../utils/motion";

const Hero = () => {
  
  return (

    <section
    className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx auto flex flex-row items-start gap-5 justify-center">
        <div className="flex flex-col justify-center items-center mt-5">
          <div />
          <div />
        </div>
        <div>
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Hi, I'm <span className="text-[#02c3fc]">
          <Typewriter
 
          onInit={(typewriter) => {
              typewriter
                  .typeString("Susanth")
                  .pauseFor(1000)
                  
                  .start();
          }}
          />
            </span></h1>
          <p classsname="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mt-2 text-white-100">
          I'm passionate about software development and fascinated by AI, ML, and RL,<br className='sm:block hidden' />
          Constantly exploring and expanding my knowledge in these areas.
            
          </p>
          
          
          
        </div>
      </div>
      
      <Robot/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#02c3fc] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  )
}

export default Hero