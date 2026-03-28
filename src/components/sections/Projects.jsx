import Section from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Scaling a Utility App',
      tag: 'Growth & Monetization',
      desc: 'Optimized the subscription funnel, identified bottlenecks in onboarding, and heavily re-targeted dormant users.',
      metric: 'Increased revenue to 5-figure MRR',
      image: 'bg-gradient-to-br from-blue-500 to-sky-400',
    },
    {
      title: 'Google Ads Optimization',
      tag: 'Paid Acquisition',
      desc: 'Restructured UAC campaigns and refined creative assets through rigorous A/B testing protocols.',
      metric: 'Decreased CPI by 40% & Increased ROAS',
      image: 'bg-gradient-to-bl from-indigo-500 to-blue-500',
    },
    {
      title: 'A/B Testing Infrastructure',
      tag: 'Data Engineering',
      desc: 'Designed and implemented an internal A/B testing system utilizing Firebase Remote Config for seamless rollouts.',
      metric: 'Overall conversion improved by 25%',
      image: 'bg-gradient-to-tr from-sky-400 to-emerald-400',
    },
  ];

  return (
    <Section id="projects" title="Featured Case Studies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            {/* Project Image Placeholder */}
            <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
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
              
              <div className="bg-blue-50 p-4 rounded-xl mt-auto">
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
