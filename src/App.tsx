import {
  About,
  Contact,
  Certifications,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { config } from './constants/config';

const App = () => {
  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <main>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </main>
      <footer className="text-secondary relative z-10 border-t border-white/5 py-8 text-center text-[14px]">
        © {new Date().getFullYear()} {config.html.fullName} ·{' '}
        <a href={config.html.github} target="_blank" rel="noreferrer" className="hover:text-white">
          GitHub
        </a>{' '}
        ·{' '}
        <a href={config.html.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
          LinkedIn
        </a>
      </footer>
      <StarsCanvas />
    </div>
  );
};

export default App;
