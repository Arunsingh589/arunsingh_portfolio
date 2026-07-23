import { motion } from 'framer-motion';

import { certifications } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <motion.div
            key={certification.title}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            className="bg-tertiary rounded-2xl p-6"
          >
            <p className="text-[14px] font-semibold uppercase text-secondary">
              {certification.subtitle}
            </p>
            <h3 className="mt-2 text-[22px] font-bold text-white">{certification.title}</h3>
            <p className="text-secondary mt-4 text-[15px] leading-[26px]">
              {certification.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, 'awards');
