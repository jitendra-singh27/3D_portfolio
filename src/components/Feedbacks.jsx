import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { proofPoints } from "../constants";

const ProofCard = ({ index, title, detail, label }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 sm:p-8 rounded-3xl w-full min-w-0'
  >
    <p className='text-[#915EFF] font-bold text-sm uppercase tracking-wider'>
      {label}
    </p>
    <h3 className='mt-5 text-white font-bold text-xl'>{title}</h3>
    <p className='mt-3 text-secondary text-[15px] leading-7'>{detail}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} pb-24 sm:pb-28 min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I bring</p>
          <h2 className={styles.sectionHeadText}>Working together.</h2>
          <p className='mt-4 max-w-2xl text-secondary text-[16px] leading-7'>
            I am building my collection of verified client testimonials. Until then, here is what you can expect when we work together.
          </p>
        </motion.div>
      </div>
      <div className={`mt-6 sm:mt-8 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 items-stretch`}>
        {proofPoints.map((point, index) => (
          <ProofCard key={point.title} index={index} {...point} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
