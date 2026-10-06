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
  git,
  docker,
  oodles,
  snaptic,
  carecob,
  nowvideo,
  langitai,
  orqeva,
  python,
  django,
  reactnative,
  nextjs,
  fastapi,
  restapi,
  postgresql,
  sqlite,
  chromadb,
  github,
  postman,
  vscode,
  openai,
  ollama,
  langchain,
  langgraph,
  rag,
  prompt,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
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
  // Frontend
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'React Native', icon: reactnative },
  { name: 'Tailwind CSS', icon: tailwind },
  // Backend
  { name: 'Python', icon: python },
  { name: 'Django', icon: django },
  { name: 'FastAPI', icon: fastapi },
  { name: 'Node.js', icon: nodejs },
  { name: 'REST APIs', icon: restapi },
  // Data
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'SQLite', icon: sqlite },
  { name: 'ChromaDB', icon: chromadb },
  // GenAI
  { name: 'OpenAI', icon: openai },
  { name: 'LangChain', icon: langchain },
  { name: 'LangGraph', icon: langgraph },
  { name: 'RAG', icon: rag },
  { name: 'Ollama', icon: ollama },
  { name: 'Prompt Engineering', icon: prompt },
  // Tools
  { name: 'Docker', icon: docker },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github },
  { name: 'Postman', icon: postman },
  { name: 'VS Code', icon: vscode },
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
      { name: 'LangGraph' },
      { name: 'LLM Integrations' },
      { name: 'Prompt Engineering' },
    ],
  },
];

const experiences: TExperience[] = [
  {
    title: 'Associate Consultant – Full Stack Developer',
    companyName: 'Oodles Technologies',
    icon: oodles,
    iconBg: '#E6DEDD',
    date: '2025 - Present',
    points: [
      'Own client products end to end, from requirements and system design through to production deployment.',
      'Ship web and mobile apps with React.js, React Native, Django and PostgreSQL, backed by clean, scalable REST APIs.',
      'Build production RAG pipelines with LangChain, vector databases, embeddings, metadata filtering and semantic search.',
      'Integrate LLMs into real workflows: OpenAI-powered features and AI voice agents with Vapi and Twilio.',
      'Work directly with international clients, turning loose ideas into clear scope and on-time releases.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    companyName: 'Snaptic Minds Consulting Pvt. Ltd.',
    icon: snaptic,
    iconBg: '#383E56',
    date: '2024',
    points: [
      'Built responsive, production-ready interfaces with React.js, JavaScript and Tailwind CSS.',
      'Shipped features and bug fixes inside an Agile team with regular sprint releases.',
      'Improved responsiveness and usability across mobile and desktop screens.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Arun was central to building our AI healthcare platform. He handled everything from the voice assistant to the admin dashboard, and the product we launched is reliable and easy for families to use. His attention to detail stood out on every release.',
    name: 'Dex',
    designation: 'Founder',
    company: 'CareCob AI',
  },
  {
    testimonial:
      'Arun quickly understood what we wanted and turned it into clean, scalable code with a polished UI. He communicated clearly, took ownership of problems, and delivered work we were proud to put in front of customers.',
    name: 'Jeff Akusta',
    designation: 'CEO',
    company: 'Langit AI',
  },
];

const certifications: TCertification[] = [
  {
    title: 'Project of the Month',
    subtitle: 'Oodles Technologies',
    description:
      'Awarded for leading end-to-end development of the CareCob AI healthcare platform and shipping it on schedule.',
  },
  {
    title: 'Ranked #1 in React',
    subtitle: 'HackerRank · 2025',
    description: 'Ranked #1 in React with a 5-star React rating, plus 5 badges in JavaScript problem solving and 3 in Python.',
  },
  {
    title: 'B.Tech, Computer Science & Engineering',
    subtitle: 'Education',
    description: 'Anangpuria Institute of Technology & Management. Graduated with a CGPA of 7.8 / 10.',
  },
];

const tag = (name: string, color: string) => ({ name, color });
const blue = 'blue-text-gradient';
const green = 'green-text-gradient';
const pink = 'pink-text-gradient';
const orange = 'orange-text-gradient';

const projects: TProject[] = [
  {
    name: 'Orqeva',
    description:
      'A platform to build, configure and deploy custom AI agents. Drag-and-drop workflows (React Flow + LangGraph), a RAG pipeline over your PDFs with ChromaDB, multi-LLM routing across OpenAI, Groq and OpenRouter, live token streaming and Super Admin / Admin / User roles.',
    tags: [
      tag('fastapi', green),
      tag('nextjs', blue),
      tag('langchain', pink),
      tag('langgraph', orange),
      tag('chromadb', green),
      tag('reactflow', blue),
      tag('rag', pink),
    ],
    image: orqeva,
  },
  {
    name: 'CareCob AI',
    description:
      'An AI elderly-care platform serving 500+ users. Voice agents run daily health check-ins and flag emergencies, caregivers get automated alerts and reports, and families and care facilities are billed through Stripe, all behind role-based access.',
    tags: [
      tag('react', blue),
      tag('django', orange),
      tag('postgresql', pink),
      tag('openai', green),
      tag('stripe', blue),
      tag('twilio', orange),
      tag('vapi', pink),
    ],
    image: carecob,
    sourceCodeLink: 'https://www.carecob.com.au/',
  },
  {
    name: 'NowVideo AI',
    description:
      'A real-time communication platform with HD video and voice calls, chat, screen and file sharing, polls, waiting rooms and phone dial-in, plus live AI voice translation so people can meet across languages.',
    tags: [
      tag('react', blue),
      tag('nodejs', green),
      tag('socket.io', pink),
      tag('postgresql', orange),
      tag('signalwire', blue),
      tag('vonage', green),
      tag('elevenlabs', pink),
    ],
    image: nowvideo,
    sourceCodeLink: 'https://nowvideo.ai/',
  },
  {
    name: 'Langit AI',
    description:
      'A no-code, AI-powered landing page builder. Describe a change in plain words and watch it happen live, with version history, media uploads, collaborative editing and one-click deployment.',
    tags: [
      tag('react', blue),
      tag('redux', green),
      tag('tailwind', pink),
      tag('python', blue),
      tag('django', orange),
    ],
    image: langitai,
    sourceCodeLink: 'https://langit.ai/',
  },
];

export { services, technologies, skillCategories, experiences, testimonials, certifications, projects };
