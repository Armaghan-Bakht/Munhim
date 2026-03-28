import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Metrics from './components/sections/Metrics';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter selection:bg-blue-500/30 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
