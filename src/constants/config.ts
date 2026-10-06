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
    github: string;
    linkedin: string;
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
    github: 'https://github.com/Arunsingh589',
    linkedin: 'https://www.linkedin.com/in/arun-singh-27148b254',
  },
  hero: {
    name: 'Arun Singh',
    p: [
      'Full Stack & AI Engineer.',
      'I build fast web products and the AI agents that power them.',
    ],
  },
  contact: {
    p: 'Have a project in mind?',
    h2: "Let's talk.",
    form: {
      name: {
        span: 'Name',
        placeholder: 'Your name',
      },
      email: { span: 'Email', placeholder: 'you@company.com' },
      message: {
        span: 'Message',
        placeholder: 'Tell me about your idea, team or role…',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a Full Stack & AI Engineer at Oodles Technologies, where I've spent 1.10+ years taking products from idea to production. I work across the whole stack, with React, Next.js and React Native on the front end and Python, Django, FastAPI and PostgreSQL on the back end. I specialize in turning LLMs into real features: RAG pipelines, agent workflows and voice assistants that ship to real users. I care about clean architecture, fast interfaces, and software that keeps working after launch.`,
    },
    experience: {
      p: 'Where I have worked',
      h2: 'Experience.',
    },
    certifications: {
      p: 'Awards & Education',
      h2: 'Recognition.',
    },
    feedbacks: {
      p: 'Kind words',
      h2: 'What clients say.',
    },
    works: {
      p: 'Selected work',
      h2: 'Projects.',
      content: `A few products I've designed and built, from AI agent platforms to real-time video and healthcare voice assistants. Each one shipped to real users, and each card lists the stack behind it.`,
    },
  },
};
