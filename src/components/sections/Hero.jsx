import { motion } from "framer-motion";
import { ArrowRight, BarChart2 } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-16  bg-slate-50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/40 to-sky-100/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-100/40 to-blue-50/40 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Scaling Mobile Apps with Data-Driven{" "}
            <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
              Marketing
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-md leading-relaxed font-medium">
            Digital Marketing Expert specializing in Google Ads, App Growth &
            Monetization. We turn data into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button as="a" href="#projects" className="gap-2">
              View Work <ArrowRight size={18} />
            </Button>
            <Button variant="outline">
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Floating Visuals/Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[350px] lg:h-[450px] w-full max-w-sm lg:max-w-md mx-auto flex items-center justify-center mt-16 lg:mt-0"
        >
          {/* Main big block representing dashboard/chart */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-sky-400 rounded-3xl shadow-2xl transform rotate-3 opacity-90 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 backdrop-blur-xl bg-white/80">
            <BarChart2 className="w-24 h-24 text-blue-500 mb-6 opacity-80" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Growth Dashboard
            </h3>
            <p className="text-slate-500 text-center">
              Optimizing Campaigns & Driving ROAS
            </p>
          </div>

          {/* Floating Stat 1 */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100"
          >
            <p className="text-3xl font-extrabold text-blue-600">4+</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Years Experience
            </p>
          </motion.div>

          {/* Floating Stat 2 */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 -right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100"
          >
            <p className="text-3xl font-extrabold text-sky-500">50+</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Apps Scaled
            </p>
          </motion.div>

          {/* Floating Stat 3 */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-8 left-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100"
          >
            <p className="text-3xl font-extrabold text-emerald-500">25%+</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Conversion Boost
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
