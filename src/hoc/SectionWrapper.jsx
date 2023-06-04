import {motion} from 'framer-motion'

import { staggerContainer } from '../utils/motion'

const SectionWrapper=(Component,idname)=>
function HOC()
{
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"

        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
            <span className="hash-span" id={idname}></span>
            <Component/>
        </motion.section>
    )
}
export default SectionWrapper