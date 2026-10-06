import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import { testimonials } from '../../constants';
import { Header } from '../atoms/Header';
import { TTestimonial } from '../../types';
import { config } from '../../constants/config';

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 flex h-full w-full flex-col rounded-3xl p-8 sm:p-10"
  >
    <p className="text-[48px] font-black leading-none text-[#915EFF]" aria-hidden="true">
      “
    </p>

    <blockquote className="mt-3 flex-1 text-[17px] leading-[30px] text-white-100">
      {testimonial}
    </blockquote>

    <div className="mt-8 flex items-center gap-4">
      <div
        className="green-pink-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[18px] font-bold text-white"
        aria-hidden="true"
      >
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-[16px] font-semibold text-white">{name}</p>
        <p className="text-secondary text-[13px]">
          {designation}, {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 grid grid-cols-1 gap-7 pb-14 md:grid-cols-2`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
