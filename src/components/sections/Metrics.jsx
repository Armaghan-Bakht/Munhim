import Section from '../ui/Section';
import { motion } from 'framer-motion';

const Metrics = () => {
  const stats = [
    { value: '50+', label: 'Apps Scaled' },
    { value: '25%+', label: 'Conversion Boost' },
    { value: '4+', label: 'Years Experience' },
    { value: '5-Fig', label: 'Monthly Revenue' },
  ];

  return (
    <Section className="bg-blue-600 w-full relative overflow-hidden text-white">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-center ${index % 2 !== 0 ? 'border-l border-white/20 lg:border-none lg:pl-0' : 'pl-0'}`}
          >
            <h5 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-2 shadow-sm">
              {stat.value}
            </h5>
            <p className="text-blue-100 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Metrics;
