import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Retail Sales Forecasting for Rossmann',
    description: 'Predict daily sales across 1,115 stores using historical data with 1M+ records. Applied statistical validation and built ensemble models achieving 95.5% variance explained.',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna'],
    liveUrl: 'https://github.com/shubham318',
    imagePosition: 'left' as const,
  },
  {
    title: 'Credit Card Default Prediction',
    description: 'Built a production-style risk classification pipeline for predicting credit card defaults. Achieved 0.89 test ROC-AUC with 22% lift in default-class recall.',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    imagePosition: 'right' as const,
  },
  {
    title: 'Google Play Store App Analysis',
    description: 'Analyzed large-scale app data to understand pricing strategies and user behavior. Applied NLP sentiment analysis and generated actionable KPIs.',
    techStack: ['Python', 'Power BI', 'Tableau', 'SQL'],
    liveUrl: '#',
    imagePosition: 'left' as const,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-t from-[hsl(42,55%,94%)] via-background to-[hsl(45,60%,95%)] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-radial from-[hsl(45,50%,88%)]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[hsl(38,45%,90%)]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col ${
                project.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 items-center`}
            >
              {/* Placeholder Image Area */}
              <div className="w-full md:w-2/5 aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Project Visual</span>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-1.5" />
                    View Project
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
