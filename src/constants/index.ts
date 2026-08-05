import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TCertification,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  typescript,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  native,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  oodles,
  snaptic,
  jobit,
  carecob,
  nowvideo,
  langitai,
  python,
  django,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'awards',
    title: 'Awards',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Full Stack Development',
    icon: web,
  },
  {
    title: 'Frontend Development',
    icon: mobile,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'AI & LLM Integration',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'React Native',
    icon: native,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'REST APIs',
    icon: 'https://cdn-icons-png.flaticon.com/512/841/841114.png',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'ChromaDB',
    icon: 'https://img.icons8.com/color/48/000000/database.png',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'RAG',
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f59e0b'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/></svg>",
  },
  {
    name: 'LangChain',
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233b82f6'><path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/></svg>",
  },
  {
    name: 'LLM Integrations',
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'><path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2v2m4 0h-2V9h2v2m4 0h-2V9h2v2'/></svg>",
  },
  {
    name: 'Prompt Engineering',
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'><path d='M9 2L7.17 6.17 3 8l4.17 1.83L9 14l1.83-4.17L15 8l-4.17-1.83L9 2M19 15l-1.17 2.83L15 19l2.83 1.17L19 23l1.17-2.83L23 19l-2.83-1.17L19 15M19 1l-1.17 2.83L15 5l2.83 1.17L19 9l1.17-2.83L23 5l-2.83-1.17L19 1z'/></svg>",
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Node.js' },
      { name: 'FastAPI' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
      { name: 'MongoDB' },
      { name: 'ChromaDB' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'VS Code' },
    ],
  },
  {
    title: 'AI/LLM',
    skills: [
      { name: 'RAG' },
      { name: 'LangChain' },
      { name: 'LLM Integrations' },
      { name: 'Prompt Engineering' },
    ],
  },
];

// const experiences: TExperience[] = [
//   {
//     title: "React.js Developer",
//     companyName: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     companyName: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     companyName: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     companyName: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const experiences: TExperience[] = [
  {
    title: 'Associate Consultant – Full Stack Developer',
    companyName: 'Oodles Technologies',
    icon: oodles,
    iconBg: '#E6DEDD',
    date: '2025 - Present',
    points: [
      'Developed and deployed scalable full-stack applications using React.js, Django, PostgreSQL, and REST APIs.',
      'Managed end-to-end application development from requirement gathering to deployment.',
      'Designed scalable backend architectures and optimized application performance.',
      'Integrated AI/LLM-powered features using OpenAI, LangChain, Twilio, and Vapi.',
      'Collaborated directly with clients and delivered multiple enterprise-grade projects.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    companyName: 'Snaptic Minds Consulting Pvt. Ltd.',
    icon: snaptic,
    iconBg: '#383E56',
    date: '2024',
    points: [
      'Built responsive React.js applications using JavaScript and Tailwind CSS.',
      'Collaborated with Agile teams to deliver new features and bug fixes.',
      'Improved UI responsiveness and overall user experience.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Arun played a key role in developing our AI healthcare platform. His expertise in full-stack development and AI integration helped us deliver a reliable, user-friendly product. His attention to detail and commitment to quality were exceptional.',
    name: 'Dex',
    designation: 'Founder',
    company: 'CareCob AI',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    testimonial:
      'Arun delivered an excellent product with clean architecture, polished UI, and outstanding technical execution. His ability to understand requirements and translate them into scalable solutions made him a valuable contributor to our project.',
    name: 'Jeff Akusta',
    designation: 'CEO',
    company: 'Langit AI',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    testimonial:
      'Arun consistently delivered high-quality code, handled complex requirements efficiently, and collaborated effectively across teams. His problem-solving skills and ownership contributed significantly to the success of the project.',
    name: 'Project Manager',
    designation: 'Lead',
    company: 'Asset Management Project',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const certifications: TCertification[] = [
  {
    title: 'Project of the Month',
    subtitle: 'Oodles Technologies',
    description:
      'Recognized for successfully leading the end-to-end development of the CareCob AI healthcare platform and delivering the project on schedule.',
  },
  {
    title: 'HackerRank React (Frontend Developer)',
    subtitle: 'React & JavaScript',
    description: 'Ranked #1 in React and earned multiple badges in React and JavaScript.',
  },
];

const projects: TProject[] = [
  {
    name: 'CareCob AI',
    description:
      'An AI-powered healthcare platform featuring intelligent voice assistants, medication reminders, personalized health profiles, real-time dashboards, SMS/email alerts, role-based authentication, and an enterprise admin panel.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'orange-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
      {
        name: 'openai',
        color: 'blue-text-gradient',
      },
      {
        name: 'langchain',
        color: 'green-text-gradient',
      },
      {
        name: 'twilio',
        color: 'orange-text-gradient',
      },
      {
        name: 'vapi',
        color: 'pink-text-gradient',
      },
    ],
    image: carecob,
    sourceCodeLink: 'https://www.carecob.com.au/',
  },
  {
    name: 'NowVideo AI',
    description:
      'A real-time collaboration platform supporting HD video meetings, voice calls, live chat, screen sharing, file sharing, waiting rooms, AI-powered voice translation, and enterprise collaboration features.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'socket.io',
        color: 'pink-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'orange-text-gradient',
      },
      {
        name: 'signalwire',
        color: 'blue-text-gradient',
      },
      {
        name: 'vonage',
        color: 'green-text-gradient',
      },
      {
        name: 'elevenlabs',
        color: 'pink-text-gradient',
      },
      {
        name: 'wordly',
        color: 'orange-text-gradient',
      },
    ],
    image: nowvideo,
    sourceCodeLink: 'http://nowvideo.ai/',
  },
  {
    name: 'Langit AI',
    description:
      'A no-code AI-powered landing page builder with prompt-driven editing, live previews, version history, media uploads, collaborative editing, and one-click deployment.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'orange-text-gradient',
      },
    ],
    image: langitai,
    sourceCodeLink: 'https://langit.ai/',
  },
  {
    name: 'Asset Management System',
    description:
      'A comprehensive enterprise asset management platform featuring role-based access control, inventory management, CRUD operations, real-time updates, API integrations, and client-side validations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'rest api',
        color: 'orange-text-gradient',
      },
      {
        name: 'rbac',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, skillCategories, experiences, testimonials, certifications, projects };
