import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
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
  carrent,
  oodles,
  snaptic,
  jobit,
  tripguide,
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
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Video Creator',
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
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
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
    name: 'docker',
    icon: docker,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'django',
    icon: django,
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
    date: '2024 - Present',
    points: [
      'Developing scalable web and mobile applications using React.js, React Native, Tailwind CSS, and modern JavaScript.',
      'Building AI-powered landing page generator using LLMs where users create and update pages dynamically through prompts.',
      'Implementing real-time section editing features allowing users to modify specific areas of the page interactively.',
      'Designing and integrating REST APIs using Python and Django for backend services and business logic.',
      'Managing live deployments and CI/CD workflows on Vercel for fast and reliable production releases.',
      'Collaborating with designers, product managers, and backend teams to deliver high-quality, user-centric solutions.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    companyName: 'Snaptic Minds',
    icon: snaptic,
    iconBg: '#383E56',
    date: '2023 - 2024',
    points: [
      'Developed responsive web applications using React.js, JavaScript, and Tailwind CSS.',
      'Converted UI/UX designs into pixel-perfect, mobile-friendly interfaces.',
      'Optimized performance and improved cross-browser compatibility.',
      'Collaborated with team members to deliver features on time in an agile development environment.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I'm incredibly impressed with Arun's work on our AI platform. The way he designed our AI persona Grace was exceptional, and the UI he created is simply outstanding. His attention to detail really brought our vision to life.",
    name: 'Dex',
    designation: 'Founder',
    company: 'Carecob AI',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    testimonial:
      "Arun delivered an exceptional website for Langit.ai. The hover effects are smooth and professional, and the Vercel deployment was flawless. His technical expertise and design sensibility are top-notch.",
    name: 'Jeff Akusta',
    designation: 'CEO',
    company: 'Langit.ai',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    testimonial:
      "Excellent work, Arun! Managing both the Finance Manager and Asset Manager modules was no small feat, but you handled the complexity brilliantly. The project exceeded our expectations.",
    name: 'Project Manager',
    designation: 'Lead',
    company: 'Asset Management Project',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Langit AI',
    description:
      'A no-code Landing Page Generator with real-time editing via prompts, inline toolbars, and live previews. Features version history, chat-driven workflows, image/video uploads with prompt-based editing, undo/redo support, and one-click deployment.',
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
        color: 'purple-text-gradient',
      },
      {
        name: 'django',
        color: 'orange-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Asset Management System',
    description:
      'A comprehensive asset management platform with CRUD operations and real-time state updates. Implements role-based access control (RBAC) at the UI level with client-side validation, error handling, and seamless API integration for consistent user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'CareCob AI',
    description:
      'An AI-powered healthcare companion platform with intelligent voice calls via VAPI, scheduled medication reminders, personalized health profiles, real-time dashboards with SMS/email alerts via Twilio, role-based authentication, and enterprise admin panel for caregiving organizations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'django',
        color: 'orange-text-gradient',
      },
      {
        name: 'python',
        color: 'purple-text-gradient',
      },
      {
        name: 'vapi',
        color: 'green-text-gradient',
      },
      {
        name: 'twilio',
        color: 'cyan-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'CareGrowth Language App',
    description:
      'An interactive language learning app with modules for pronunciation, grammar, vocabulary, and practice lessons. Features AI-powered voice chat for conversations with speech-to-text, audio playback (normal/slow), and a vocabulary learning workflow with visual feedback and auto-reveal functionality.',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
