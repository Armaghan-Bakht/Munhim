import Section from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';
import p1 from '../../assets/AntiVirus.jpeg';
import p2 from '../../assets/DataRecovery.jpeg';
import p3 from '../../assets/TimeWarp.jpeg';
import p4 from '../../assets/VideoPlayer.jpeg';
import p5 from '../../assets/Vidma.jpeg';

const Projects = () => {
  const projects = [
  {
    title: 'Anti Virus App',
    tag: 'Running',
    desc: 'Developed real-time threat detection and malware scanning system with enhanced device protection and performance optimization.',
    metric: 'Improved threat detection accuracy by 60%',
    img: p1,
  },
  {
    title: 'Data Recovery App',
    tag: 'Sold',
    desc: 'Built advanced file recovery algorithms to restore deleted photos, videos, and documents from internal and external storage.',
    metric: 'Recovered 85% of lost user data successfully',
    img: p2,
  },
  {
    title: 'Time Warp App',
    tag: 'Running',
    desc: 'Created an interactive slow-motion video experience with real-time filters and engaging visual effects for social content.',
    metric: 'User engagement increased by 30%',
    img: p3,
  },
  {
    title: 'Video Player App',
    tag: 'Sold',
    desc: 'Designed a high-performance video player supporting multiple formats with smooth playback and subtitle integration.',
    metric: 'Playback performance improved by 50%',
    img: p4,
  },
  {
    title: 'Vidma Video Downloader',
    tag: 'Running',
    desc: 'Enabled fast and secure video downloading from multiple platforms with background processing and format selection.',
    metric: 'Download speed increased by 2x',
    img: p5,
  },
  ];

  return (
    <Section id="projects" title="Featured Case Studies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            {/* Project Image Placeholder */}
            <div className="h-56 w-full relative overflow-hidden bg-slate-100">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                {project.tag}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                {project.title}
                <ArrowUpRight size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              
              <p className="text-slate-600 mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="bg-blue-50 p-4 rounded-xl mt-auto transition-colors group-hover:bg-blue-100/50">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">Impact</p>
                <p className="text-blue-900 font-bold">{project.metric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
