import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const cover = (
    <img
      src={image}
      alt={`${name} preview`}
      loading="lazy"
      decoding="async"
      width={360}
      height={230}
      className="h-full w-full rounded-2xl object-cover"
    />
  );

  return (
    // Every wrapper is a flex container so cards stretch to the tallest one in the row.
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)} className="flex flex-shrink-0">
      <Tilt
        className="flex"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareEnable
        glareMaxOpacity={0.15}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary rounded-2xl p-5 flex flex-col w-[300px] sm:w-[340px] md:w-[360px]">
          <div className="relative h-[230px] w-full">
            {sourceCodeLink ? (
              <a href={sourceCodeLink} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`}>
                {cover}
              </a>
            ) : (
              cover
            )}
          </div>
          <div className="mt-5 flex flex-col flex-grow">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[24px] font-bold text-white">{name}</h3>
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-[13px] font-medium whitespace-nowrap hover:text-white"
                >
                  Live ↗
                </a>
              )}
            </div>
            <p className="text-secondary mt-2 text-[14px] leading-[22px] flex-grow">{description}</p>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
              {tags.map(tag => (
                <p key={tag.name} className={`text-[14px] font-medium ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-nowrap gap-7 w-full overflow-x-auto pb-4 scrollbar-hide">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
