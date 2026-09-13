import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full min-h-[680px] h-screen max-h-[980px] mx-auto overflow-hidden'>
      <div
        className={`absolute inset-x-0 top-[112px] sm:top-[132px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-4 sm:mt-5 shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-32 violet-gradient' />
        </div>

        <div className='min-w-0'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Jitendra Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop scalable web applications <br className='sm:block hidden' />
            using React, NextJs, Express , Node.js and other cool
            technologies.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-8 sm:bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
