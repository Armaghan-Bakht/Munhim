import Section from '../ui/Section';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'App Growth Specialist',
      company: 'Funsol Technologies',
      period: 'April 2024 – Present',
      points: [
        'Managed and scaled advertising for a portfolio of 50+ applications.',
        'Executed profitable campaigns driving high-quality user acquisition.',
        'Experimented with funnel optimization, improving overall conversion rates up to 25%.',
        'Maintained a strict focus on ROAS & predictable revenue growth month-over-month.'
      ],
      current: true,
    },
    {
      role: 'ASO Lead & Monetization',
      company: 'Funloft Solutions',
      period: 'Jan 2023 – April 2024',
      points: [
        'Led the App Store Optimization (ASO) team to secure top organic rankings.',
        'Scaled paid campaigns effectively lowering the average CPI across utilities.',
        'Managed ad networks and optimized ad placements to maximize eCPM.',
      ],
      current: false,
    }
  ];

  return (
    <Section id="experience" title="Professional Experience" className="bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-200">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 lg:ml-12 relative group">
              {/* Timeline dot */}
              <span className="absolute -left-[41px] lg:-left-[57px] flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full border-4 border-blue-100 group-hover:border-blue-300 transition-colors shadow-sm">
                <Briefcase size={20} className={exp.current ? 'text-blue-600' : 'text-slate-400'} />
              </span>

              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-blue-600">{exp.company}</h4>
                  </div>
                  <span className="inline-flex mt-2 md:mt-0 items-center bg-slate-100 text-slate-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">▹</span>
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
