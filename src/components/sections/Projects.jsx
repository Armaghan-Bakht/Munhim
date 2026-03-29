import { useState, useEffect } from "react";
import Section from "../ui/Section";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import p1 from "../../assets/AntiVirus.jpeg";
import p2 from "../../assets/DataRecovery.jpeg";
import p3 from "../../assets/TimeWarp.jpeg";
import p4 from "../../assets/TimeWarp2.jpeg";
import p5 from "../../assets/VideoPlayer.jpeg";
import p6 from "../../assets/Vidma.jpeg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
  {
    title: "Anti Virus App",
  
    desc: "Managed full-scale user acquisition and monetization for an antivirus app on Google Ads, handling a large budget over a 1-year period (Aug 2023 – Aug 2024).",
    metric: "Achieved a 3.56x ROAS while driving 24.5M+ conversions and 812M+ impressions, with conversion tracking set up via Firebase. Monetized through a combined IAA & IAP model to maximize revenue across the user base. Campaign was successfully concluded after the app was acquired and sold.",
    img: p1,
  },
  {
    title: "Data Recovery App",
   
    desc: "Managed a performance-driven user acquisition campaign (Action Campaign) for a data recovery app on Google Ads, targeting premium markets — Korea and Japan — from Jan 2026 to Mar 2026.",
    metric: "Achieved 1.8x ROI on $109K+ spend, generating 1,574 in-app actions and 3.4M+ impressions. Reduced cost per action significantly by localizing ad assets for the target markets and running structured A/B tests on creatives. App monetized purely through IAP, with campaigns optimized to attract high-intent, paying users.",
    img: p2,
  },
  {
    title: "Time Warp Scan App",
    
    desc: "Managing an active tROAS user acquisition campaign on Google Ads for a slow-motion video and scan effects app, running since Oct 2025.",
    metric: "Currently achieving 1.34x Conv. value/cost (tROAS) across 88.5M+ impressions and $52K+ spend. Running two active campaigns — a broad global campaign and a targeted scan-focused campaign — both optimized for maximum return on ad spend. App monetized through an IAA model with ongoing creative and bid optimization to improve ROAS.",
    img: p3,
  },
   {
    title: "Time Warp Scan App — Large Scale Campaign",
  
    desc: "Managed a high-budget tROAS user acquisition campaign on Google Ads for the Time Warp Scan app, running from Jul 2024 to Mar 2026.",
    metric: "Handled $493K+ in ad spend across 709M+ impressions, driving 18M+ interactions at an average cost of $0.01. Ran a large-scale Target ROAS campaign optimized for maximum volume and revenue return. One of the highest-budget campaigns managed independently, demonstrating ability to handle large accounts and significant budgets with confidence.",

    img: p4,
  },
  {
    title: "Video Player App",
    desc: "Managed a large-scale tROAS user acquisition campaign on Google Ads for a video player app, running from Mar 2025 to Mar 2026.",
    metric: "Scaled the app to $357K+ in ad spend across 277M+ impressions, driving millions of interactions at an average cost of $0.01. Successfully grew the app to a scale that led to its acquisition and sale — campaign was removed following the app sale.",
    img: p5,
  },
  {
    title: "Vidma Video Downloader",
    desc: "Managed one of the highest-performing user acquisition campaigns on Google Ads for a video downloader app, running from Jan 2023 to Mar 2025.",
    metric: "Scaled to $1.86M+ in total ad spend across 1.59B+ impressions, driving 36.9M+ conversions at a 0.90x Conv. value/cost. Started as a pure IAA monetization model — after implementing a paywall, the app began generating $200+ daily from IAP as well, significantly boosting overall revenue. Ran extensive A/B testing on creatives and ad assets, and set up full conversion tracking via Firebase to ensure every decision was data-backed. Campaign removed after the app was sold.",
    img: p6,
  },
];

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || selectedProject) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [projects.length, isHovered, selectedProject]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -30) {
      // Swiped left, show next item
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (info.offset.x > 30) {
      // Swiped right, show previous item
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  return (
    <Section id="projects" title="Featured Projects" className="overflow-hidden">
      {/* DESKTOP VIEW (Masonry Layout) */}
      <div className="hidden md:block md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group break-inside-avoid bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl shadow-slate-200 border border-slate-100 hover:border-blue-100 hover:-translate-y-1 transition-all duration-500 flex flex-col cursor-pointer mb-6"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 xl:h-56 w-full relative overflow-hidden bg-slate-100">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-70" />
            </div>

            <div className="p-7 xl:p-8 flex flex-col flex-grow">
              <h3 className="text-xl xl:text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors flex items-start justify-between gap-4">
                <span>{project.title}</span>
                <ArrowUpRight
                  size={20}
                  className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1"
                />
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.desc}</p>

              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-5 rounded-2xl mt-auto border border-blue-100/50 group-hover:border-blue-200/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1 h-3 rounded-full bg-blue-500/70 block"></span>
                  <p className="text-xs text-blue-700/80 font-bold uppercase tracking-wider">
                    Impact
                  </p>
                </div>
                <p className="text-blue-900/80 font-medium text-sm leading-relaxed">{project.metric}</p>
              </div>
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
              <div
              onClick={() => setSelectedProject(projects[currentIndex])}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={projects[currentIndex].img}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              <div className="p-7 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 flex items-start justify-between gap-4">
                  <span>{projects[currentIndex].title}</span>
                  <ArrowUpRight size={20} className="text-slate-300 flex-shrink-0 mt-1" />
                </h3>
                <p className="text-slate-500 mb-6 flex-grow text-sm leading-relaxed">{projects[currentIndex].desc}</p>
                
                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-5 rounded-2xl mt-auto border border-blue-100/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-3 rounded-full bg-blue-500/70 block"></span>
                    <p className="text-xs text-blue-700/80 font-bold uppercase tracking-wider">
                      Impact
                    </p>
                  </div>
                  <p className="text-blue-900/80 font-medium text-sm leading-relaxed">{projects[currentIndex].metric}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Indicators */}
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>
              
              <div className="relative w-full flex items-center justify-center p-4 bg-slate-100 h-full max-h-[90vh] overflow-hidden">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                  style={{ maxHeight: 'calc(90vh - 2rem)' }}
                />
              </div>
              
              {/* Black shade with App Title at the bottom */}
              {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32 pb-8 px-8 sm:px-12 pointer-events-none">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                  {selectedProject.title}
                </h3>
                {selectedProject.tag && (
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wider shadow-sm">
                    {selectedProject.tag}
                  </span>
                )}
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
