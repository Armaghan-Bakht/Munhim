import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      role: 'App Growth Specialist',
      company: 'Funsol Technologies',
      period: 'April 2024 – Present',
      points: [
        'Led user acquisition for 50+ apps and games, managing large-scale budgets and multiple ad accounts across Google Ads, Meta, TikTok, and Mintegral.',
        'Drove high-quality installs at efficient CPIs through continuous campaign optimization, creative testing, and audience segmentation.',
        'Collaborated with designers and video editors to produce high-performing ad creatives that improved CTR and conversion rates.',
        'Managed ASO for Android apps and games, improving organic visibility and keyword rankings on Google Play.',
        'Implemented and optimized IAA & IAP monetization models to maximize revenue while maintaining healthy user retention.',
        'Set up and managed conversion tracking across Firebase, Google Analytics, Tenjin, and AppsFlyer for full-funnel visibility and data-driven decision making.'
      ],
      current: true,
    },
    {
      role: 'ASO Lead & Monetization',
      company: 'Funloft Solutions',
      period: 'Jan 2023 – April 2024',
      points: [
        'Led the ASO team, overseeing keyword research, metadata optimization, and app visibility strategy across Google Play and the App Store.',
        'Improved organic rankings and drove consistent growth in app installs through data-backed ASO practices.',
        'Managed user acquisition campaigns on Google Ads, optimizing for install volume and cost efficiency.',
        'Planned and optimized IAA monetization setups, improving ad placements and maximizing eCPM across ad networks.'
      ],
      current: false,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 4500); // Automatically slide every 4.5 seconds
    return () => clearInterval(timer);
  }, [experiences.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -30) {
      // Swiped left, show next
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    } else if (info.offset.x > 30) {
      // Swiped right, show previous
      setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    }
  };

  return (
    <Section id="experience" title="Professional Experience" className="bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* DESKTOP VIEW (Timeline Layout) */}
        <div className="hidden md:block relative border-l-2 border-blue-200 ml-6 lg:ml-0">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-14 ml-12 relative group">
              {/* Timeline dot */}
              <span className={`absolute -left-[73px] flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 z-10 ${exp.current ? 'bg-blue-600 border-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'bg-slate-50 border-slate-200 group-hover:border-blue-300'}`}>
                {exp.current ? (
                  <Briefcase size={20} className="text-white" />
                ) : (
                  <Briefcase size={20} className="text-slate-400 group-hover:text-blue-500" />
                )}
              </span>

              {/* Experience Card */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-md shadow-slate-200/60 border border-slate-200 group-hover:border-blue-200 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-semibold text-base">
                      {exp.company}
                    </div>
                  </div>
                  <span className={`inline-flex self-start md:self-auto items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border ${exp.current ? 'bg-blue-600/10 text-blue-700 border-blue-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start group/item">
                      <CheckCircle2 size={20} className="text-blue-500 mr-4 mt-0.5 shrink-0 opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-slate-600 leading-relaxed text-[1.05rem]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW (Auto-sliding Carousel) */}
        <div className="block md:hidden relative w-full pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={handleDragEnd}
            >
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-slate-200/60 border border-slate-200">
                <div className="flex flex-col mb-6 gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{experiences[currentIndex].role}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-semibold text-sm">
                      {experiences[currentIndex].company}
                    </div>
                  </div>
                  <span className={`inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide border ${experiences[currentIndex].current ? 'bg-blue-600/10 text-blue-700 border-blue-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                    {experiences[currentIndex].period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {experiences[currentIndex].points.map((point, i) => (
                    <li key={i} className="flex items-start group/item">
                      <CheckCircle2 size={18} className="text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-600 leading-relaxed text-[0.95rem]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slider Indicators */}
          <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
