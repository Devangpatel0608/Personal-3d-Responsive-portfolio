import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { about } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} mt-5 md:mt-0`}>About Me</h2> 
      </motion.div>

      <div className='mt-5 md:mt-0 flex flex-col gap-5 md:gap-20'> 
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn("up", "spring", 0, 0.75)}
          className={`w-full mt-[-2px] flex flex-col md:flex-row md:flex-row-reverse gap-5`}
        >
        <div className='relative w-full md:w-3/5 flex justify-center items-center'>
            <div className='w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[570px] lg:h-[570px]'>
              <img
                src={about.image}
                alt='about_image'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>

          <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center text-left md:text-right`}>
            <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{about.name}</h3>
            <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{about.description}</p> <br /><br />
            {/* <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-badge">
              <span className="resume-text" style={{ fontSize: "20px", marginLeft: "10px" }}>Resume</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" style={{ fontSize: "20px", marginLeft: "5px" }} />
            </a> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
