import Section from '../ui/Section';
import { Megaphone, LineChart, TrendingUp, Gem } from 'lucide-react';
import appLovinImg from '../../assets/applovin.jpg';
import appsFlyerImg from '../../assets/appsflyer.png';
import adMobImg from '../../assets/admob.jpg';
import googleAdsImg from '../../assets/googleAds.png';
import fireBase from '../../assets/firebase.jpg';

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
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 ${skill.color} group-hover:bg-blue-600 group-hover:text-white`}
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

      {/* Tools & Platforms Section */}
      <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200/60 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-4 sm:px-6 w-max max-w-[90%]">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 text-center truncate">
            Platforms & Tools
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-6 max-w-5xl mx-auto mt-4 sm:mt-6">
          {[
            { name: 'Google Ads', icon: googleAdsImg, color: 'hover:border-blue-300 hover:shadow-blue-500/10' },
            { name: 'Meta Ads', icon: 'https://cdn.simpleicons.org/meta/1877F2', color: 'hover:border-blue-400 hover:shadow-blue-500/10' },
            { name: 'TikTok Ads', icon: 'https://cdn.simpleicons.org/tiktok/000000', color: 'hover:border-slate-800 hover:shadow-slate-500/10' },
            { name: 'Firebase', icon: fireBase, color: 'hover:border-orange-400 hover:shadow-orange-500/10' },
            { name: 'AdMob', icon: adMobImg, color: 'hover:border-red-400 hover:shadow-red-500/10' },
            { name: 'AppsFlyer', icon: appsFlyerImg, color: 'hover:border-blue-400 hover:shadow-blue-500/10' },
            { name: 'Unity Ads', icon: 'https://cdn.simpleicons.org/unity/000000', color: 'hover:border-slate-500 hover:shadow-slate-500/10' },
            { name: 'AppLovin', icon: appLovinImg, color: 'hover:border-indigo-400 hover:shadow-indigo-500/10' },
            { name: 'Mintegral', icon: 'https://www.google.com/s2/favicons?domain=mintegral.com&sz=128', color: 'hover:border-green-400 hover:shadow-green-500/10' },
            { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', color: 'hover:border-amber-400 hover:shadow-amber-500/10' },
            { name: 'Sensor Tower', icon: 'https://www.google.com/s2/favicons?domain=sensortower.com&sz=128', color: 'hover:border-slate-400 hover:shadow-slate-500/10' },
            { name: 'Data.ai', icon: 'https://www.google.com/s2/favicons?domain=data.ai&sz=128', color: 'hover:border-blue-400 hover:shadow-blue-500/10' },
            { name: 'AppStore Spy', icon: 'https://www.google.com/s2/favicons?domain=appstorespy.com&sz=128', color: 'hover:border-blue-400 hover:shadow-blue-500/10' },
            { name: 'AppGrowing', icon: 'https://www.google.com/s2/favicons?domain=appgrowing.net&sz=128', color: 'hover:border-blue-400 hover:shadow-blue-500/10' },
          ].map((tool, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-default flex-grow sm:flex-grow-0 justify-center ${tool.color}`}
            >
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-5 h-5 sm:w-7 sm:h-7 object-contain rounded-md transition-transform duration-300 group-hover:scale-110 shrink-0" 
              />
              <span className="font-semibold text-xs sm:text-base text-slate-700 whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
