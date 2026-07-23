type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    certifications: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Arun Singh',
    fullName: 'Arun Singh',
    email: 'arunsingh875014@gmail.com',
  },
  hero: {
    name: 'Arun Singh',
    p: [
      'Full Stack Developer | AI Engineer',
      'Building scalable web applications and AI-powered solutions.',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a Full Stack Developer with 1.6+ years of professional experience developing scalable web and mobile applications using React.js, Next.js, React Native, Python, Django, FastAPI, PostgreSQL, and Tailwind CSS. Currently working as an Associate Consultant at Oodles Technologies, I specialize in designing end-to-end applications, building REST APIs, integrating AI/LLM-powered features, and delivering high-quality production software. I enjoy solving complex engineering problems, learning emerging technologies, and transforming ideas into reliable products.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    certifications: {
      p: 'Certifications & Awards',
      h2: 'Recognition.',
    },
    feedbacks: {
      p: 'Client Appreciation',
      h2: 'What Clients Say.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    the technologies behind it. It reflects my ability to solve complex problems,
    work with different technologies, and deliver production-ready software that
    creates real business value.`,
    },
  },
};
