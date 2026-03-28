import Section from '../ui/Section';
import { Megaphone, LineChart, TrendingUp, Gem } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: 'Paid Ads',
      desc: 'Expert in Google Ads (UAC, Search, Display, YouTube) driving high-intent installs.',
      icon: Megaphone,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Analytics',
      desc: 'Data extraction & interpretation using Firebase and Google Analytics to find growth levers.',
      icon: LineChart,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Growth Settings',
      desc: 'Optimizing CPI, tracking ROAS, increasing LTV, and boosting core retention metrics.',
      icon: TrendingUp,
      color: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'ASO & Monetization',
      desc: 'In-App Purchases and Subscription Optimization to maximize the revenue funnel.',
      icon: Gem,
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <Section id="skills" title="Core Expertise">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${skill.color} group-hover:bg-blue-600 group-hover:text-white`}
              >
                <Icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{skill.desc}</p>
              
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
