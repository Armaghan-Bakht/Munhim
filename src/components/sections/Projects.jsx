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
    tag: "Removed after app sale",
    desc: "Developed real-time threat detection and malware scanning system with enhanced device protection and performance optimization.",
    metric: "Enhanced user experience through AB-tested security features, driving higher ROI for subscriptions",
    img: p1,
  },
  {
    title: "Active Campaign",
    tag: "Sold",
    desc: "Built advanced file recovery algorithms to restore deleted photos, videos, and documents from internal and external storage.",
    metric: "Optimized data recovery flow and tested creative messaging, improving ROI by boosting user retention",
    img: p2,
  },
  {
    title: "Time Warp App",
    tag: "Active Campaign",
    desc: "Created an interactive slow-motion video experience with real-time filters and engaging visual effects for social content.",
    metric: "AB-tested visual effects and onboarding flow, enhancing user engagement and increasing ROI",
    img: p3,
  },
   {
    title: "Time Warp App",
    tag: "Paused",
    desc: "Created an interactive slow-motion video experience with real-time filters and engaging visual effects for social content.",
    metric: "AB-tested visual effects and onboarding flow, enhancing user engagement and increasing ROI",
    img: p4,
  },
  {
    title: "Video Player App",
    tag: "Removed after app sale",
    desc: "Designed a high-performance video player supporting multiple formats with smooth playback and subtitle integration.",
    metric: "Improved playback experience and creative testing, driving stronger user satisfaction and ROI",
    img: p5,
  },
  {
    title: "Vidma Video Downloader",
    tag: "Removed after app sale",
    desc: "Enabled fast and secure video downloading from multiple platforms with background processing and format selection.",
    metric: "Optimized download performance and tested interface creatives, boosting user retention and ROI",
    img: p6,
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [projects.length]);

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
      {/* DESKTOP VIEW (Grid) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
          >
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
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors"
                />
              </h3>

              <p className="text-slate-600 mb-6 flex-grow">{project.desc}</p>

              <div className="bg-blue-50 p-4 rounded-xl mt-auto transition-colors group-hover:bg-blue-100/50">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">
                  Impact
                </p>
                <p className="text-blue-900 font-bold">{project.metric}</p>
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
          >
            <div
              onClick={() => setSelectedProject(projects[currentIndex])}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={projects[currentIndex].img}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                  {projects[currentIndex].tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center justify-between">
                  {projects[currentIndex].title}
                  <ArrowUpRight size={20} className="text-slate-400" />
                </h3>
                <p className="text-slate-600 mb-6 flex-grow text-sm sm:text-base">{projects[currentIndex].desc}</p>
                <div className="bg-blue-50 p-4 rounded-xl mt-auto">
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">
                    Impact
                  </p>
                  <p className="text-blue-900 font-bold text-sm sm:text-base">{projects[currentIndex].metric}</p>
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
