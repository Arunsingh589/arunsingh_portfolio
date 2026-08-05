import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <section
      id="tech"
      className="flex flex-col items-center justify-center gap-10 h-full relative py-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center z-10 block">
        <motion.div
          variants={textVariant()}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center rounded-3xl bg-[#151030]/50 backdrop-blur-md"
        >
          <span className="text-[#b49bff] mr-[10px] text-lg">✨</span>
          <h1 className="Welcome-text text-[13px] px-2 text-white">
            Think better with modern technologies
          </h1>
        </motion.div>

        <motion.div
          variants={textVariant(0.1)}
          className="text-white text-[45px] font-bold mt-[20px] text-center mb-[10px]"
        >
          Making websites with modern technologies.
        </motion.div>

        <motion.div
          variants={textVariant(0.2)}
          className="text-secondary text-[22px] max-w-3xl leading-[30px] mb-14 mt-[10px] text-center"
        >
          Never miss a task, deadline or idea.
        </motion.div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 z-10 mt-5">
        {technologies.map((technology, index) => (
          <Tilt
            key={technology.name}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable
            glareMaxOpacity={0.2}
            scale={1.1}
            className="w-[120px] h-[120px]"
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="w-full h-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
            >
              <div
                className="bg-tertiary w-full h-full rounded-2xl flex flex-col justify-center items-center p-3 gap-2"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-white text-[12px] font-medium text-center w-full truncate">
                  {technology.name}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
