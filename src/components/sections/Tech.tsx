import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Tech = () => {
  const [visibleBalls, setVisibleBalls] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const techName = entry.target.getAttribute("data-tech");
          if (techName && entry.isIntersecting) {
            setVisibleBalls((prev) => new Set(prev).add(techName));
          }
        });
      },
      { threshold: 0.01 }
    );

    // Delay observer setup to ensure elements are mounted
    const timer = setTimeout(() => {
      const ballElements = document.querySelectorAll("[data-tech]");
      ballElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  // Split technologies into groups for reverse triangle layout: 4, 3, 2, 1, 1, 1...
  const sizes = [5, 4, 3, 2, 1, 1, 1, 1, 1, 1];
  const techGroups: typeof technologies[] = [];
  let startIdx = 0;

  sizes.forEach((size) => {
    if (startIdx < technologies.length) {
      techGroups.push(technologies.slice(startIdx, startIdx + size));
      startIdx += size;
    }
  });

  const TechRow = ({ techs, index }: { techs: typeof technologies; index: number }) => (
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      {techs.map((technology) => (
        <div
          className="h-28 w-28"
          key={technology.name}
          data-tech={technology.name}
        >
          {visibleBalls.has(technology.name) ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className="h-full w-full bg-tertiary rounded-lg animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="tech"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <span className="text-[#b49bff] mr-[10px] text-lg">✨</span>
          <h1 className="Welcome-text text-[13px]">
            Think better with modern technologies
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          Making websites with modern technologies.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Never miss a task, deadline or idea.
        </motion.div>
      </div>

      {/* Reverse Triangle Layout */}
      {techGroups.map((group, index) => (
        group.length > 0 && <TechRow key={index} techs={group} index={index} />
      ))}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
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
