import Section from "../ui/Section";
import { Target, TrendingUp, CheckCircle2 } from "lucide-react";
import profileImage from "../../assets/Profile.png";

const About = () => {
  const highlights = [
    { title: "App Growth Specialist", icon: TrendingUp },
    { title: "Subscription Monetization", icon: Target },
    { title: "A/B Testing Expert", icon: CheckCircle2 },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
        {/* Left Column: Image or Graphic */}
        <div className="relative group mt-20 lg:mt-0 w-full max-w-md mx-auto">
          {/* Decorative background cards */}
          <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-6 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-3" />
          <div className="absolute inset-0 bg-sky-400 rounded-3xl transform -rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:-rotate-1" />

          {/* Main frame */}
          <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-slate-100 aspect-square flex flex-col">
            <div className="w-full h-full bg-slate-50 rounded-2xl relative flex justify-center items-end">
              {/* Image anchored to the bottom and breaking out of the top */}
              <img
                src={profileImage}
                alt="Abdul Munhim Ejaz"
                className="w-[105%] max-w-none h-auto object-contain absolute bottom-0 z-10
  transition-transform duration-500 group-hover:scale-[1.03] origin-bottom drop-shadow-xl
  [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_100%)] 
  [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_100%)]"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-blue-600">Abdul Munhim Ejaz</span>
          </h3>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
            <p>
              I am a results-driven Digital Marketer and App Growth Specialist
              based in Islamabad, Pakistan. With over 4 years of hands-on
              experience in the fast-paced app industry, my primary focus is
              turning raw data into actionable, revenue-generating strategies.
            </p>
            <p>
              My expertise lies deeply in Google Ads (UAC, Search, Display,
              YouTube) and taking a rigorous, data-first approach to maximize
              ROI and ROAS for mobile applications. Whether it's acquiring
              highly engaged users or optimizing in-app funnels for better
              conversion, I engineer growth loops that scale profitably.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
