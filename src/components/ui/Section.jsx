import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '', index = 0 }) => {
  return (
    <section id={id} className={`py-12 md:py-16 w-full flex-col justify-center ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
