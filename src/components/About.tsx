import { GraduationCap, Calendar, Gamepad2, Brain, Heart } from 'lucide-react';

const education = [
  {
    degree: 'Data Analyst Internship',
    institution: 'Softogrid Solution Private Limited, Noida',
    year: 'Aug 2025- Present',
  },
  {
    degree: 'B.Sc. in Statistics, Mathematics & Physics',
    institution: 'Shri Guru Ram Rai University, Dehradun',
    year: '2021-2024',
  },
  {
    degree: '12th Grade',
    institution: 'Delhi Kannada School, Delhi',
    year: '2020-2021',
  },
  {
    degree: '10th Grade',
    institution: "St. Crispin's Sr. Sec. School, Gurugram",
    year: '2018-2019',
  },
];

const interests = [
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Brain, label: 'Chess' },
  { icon: Heart, label: 'Social Work' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[hsl(45,60%,96%)] via-[hsl(42,50%,94%)] to-[hsl(38,45%,93%)] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-radial from-[hsl(45,55%,88%)]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-radial from-[hsl(42,50%,90%)]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="container-wide">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mt-10">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a data professional with an analytical mindset and a strong foundation in statistics and applied machine learning. My expertise spans regression, classification, and time-series modeling, allowing me to tackle diverse business challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in Python, SQL, Excel, Tableau, and Power BI, I build end-to-end data solutions—from ETL pipelines and API integrations to model development and interpretation using techniques like SHAP analysis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to apply my skills to real-world data challenges, turning complex datasets into actionable insights that drive business decisions.
            </p>

            {/* Languages & Interests */}
            <div className="pt-6 flex flex-wrap gap-6">
              <div>
                <span className="text-sm text-muted-foreground">Languages:</span>
                <span className="ml-2 text-foreground font-medium">English, Hindi</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Interests:</span>
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                  >
                    <interest.icon size={14} className="text-primary" />
                    {interest.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30 last:border-l-transparent">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <h4 className="font-medium text-foreground leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.institution}
                  </p>
                  {edu.year && (
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
