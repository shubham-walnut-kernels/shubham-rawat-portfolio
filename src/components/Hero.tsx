import { BarChart3, Code, Presentation } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

const skillColumns = [
  {
    title: 'Analyzing',
    icon: BarChart3,
    items: ['Statistical Analysis', 'Simple ML', 'Data Mining', 'Predictive Modeling'],
  },
  {
    title: 'Developing',
    icon: Code,
    items: ['Python', 'SQL', 'Data Pipelines', 'ETL Processes'],
  },
  {
    title: 'Communicating',
    icon: Presentation,
    items: ['Data handling', 'Business Thinking', 'Dashboard Design', 'Data Storytelling'],
  },
];

const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section className="py-12 bg-gradient-to-b from-background via-[hsl(42,55%,94%)] to-background relative overflow-hidden">
      {/* Subtle gold radial accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[hsl(45,60%,90%)]/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-[hsl(38,50%,88%)]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="container-narrow">
        {/* Profile Image - Centered Circular */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-burgundy">
              <img
                src={profileImage}
                alt="Shubham Rawat - Data Scientist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-muted-foreground leading-relaxed">
            I'm a data analyst based in New Delhi, India, passionate about transforming complex data 
            into actionable business insights. With expertise in statistical analysis, machine learning, 
            and data visualization, I help organizations make data-driven decisions that drive growth 
            and efficiency.
          </p>
        </div>

        {/* Three Column Skills */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {skillColumns.map((column) => (
            <div key={column.title}>
              <column.icon className="w-10 h-10 mx-auto text-primary mb-3" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-3">{column.title}</h3>
              <ul className="space-y-1.5">
                {column.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
