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
          <p className="Welcome-text text-[13px] px-2 text-white">
            My toolkit
          </p>
        </motion.div>

        <motion.div
          variants={textVariant(0.1)}
          className="text-white text-[45px] font-bold mt-[20px] text-center mb-[10px]"
        >
          The stack I build with.
        </motion.div>

        <motion.div
          variants={textVariant(0.2)}
          className="text-secondary text-[22px] max-w-3xl leading-[30px] mb-14 mt-[10px] text-center"
        >
          From pixel-perfect interfaces to APIs, databases and production AI agents.
        </motion.div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 z-10 mt-5">
        {technologies.map((technology, index) => (
          <Tilt
            key={technology.name}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.08}
            className="w-[120px] h-[120px]"
          >
            <motion.div
              variants={fadeIn("up", "spring", Math.min(index * 0.04, 0.8), 0.75)}
              className="w-full h-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
            >
              <div
                className="bg-tertiary w-full h-full rounded-2xl flex flex-col justify-center items-center p-3 gap-2"
              >
                <img
                  src={technology.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-white text-[12px] font-medium text-center w-full leading-tight">
                  {technology.name}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Tech, "tech");
