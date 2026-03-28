import { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'munhimzai1997@gmail.com', href: 'mailto:munhimzai1997@gmail.com' },
    { icon: Phone, label: 'Phone', value: '03109010550', href: 'tel:03109010550' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: null },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Let's build something great.</h3>
          <p className="text-slate-600 mb-10 text-lg">
            Whether you have a question about scaling your app or just want to connect, my inbox is always open.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-slate-900">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          {/* subtle bg glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            
            <Button type="submit" className="w-full gap-2 relative overflow-hidden">
              <span>Send Message</span>
              <Send size={18} />
              
              {isSubmitted && (
                 <div className="absolute inset-0 bg-emerald-500 flex items-center justify-center text-white font-bold transition-all duration-300">
                    Message Sent!
                 </div>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
