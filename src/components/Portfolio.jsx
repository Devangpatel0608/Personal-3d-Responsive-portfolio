import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
        />
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-tight'>
          {name}
        </h3>
        <p className='mt-4 text-secondary text-sm sm:text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className='mt-10 text-center'>
        <a
          href='https://github.com/Devangpatel0608'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary text-lg hover:underline github-link'
        >
          More Projects On My GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" style={{ fontSize: "15px", marginLeft: "5px" }} />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
