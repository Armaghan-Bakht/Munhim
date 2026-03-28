const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white tracking-tighter mb-4">
          A<span className="text-blue-500">M</span>E.
        </h2>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abdul Munhim Ejaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
