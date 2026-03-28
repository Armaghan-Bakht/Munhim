import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToMenu = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left max-w-sm">
            <h2 className="text-4xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-sm">
              A<span className="text-blue-500">M</span>E.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              Driving Installs, Visibility, and Revenue for Mobile Apps. Scaling growth securely through data-driven performance marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm sm:text-base font-semibold text-slate-300 md:pt-4">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToMenu(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors focus:outline-none"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-slate-800/60 mb-8" />

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            &copy; {currentYear} Abdul Munhim Ejaz. All rights reserved.
          </p>
          
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white group transition-colors focus:outline-none"
          >
            Back to top
            <div className="w-10 h-10 rounded-full bg-slate-800 shadow-inner flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <ArrowUp size={18} className="text-slate-300 group-hover:text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
