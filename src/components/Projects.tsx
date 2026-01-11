import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

import rossmannVideo from '../../Rossmann vid.mp4';
import creditVideo from '../../credit vid.mp4';
import playstoreVideo from '../../playstore video.wmv';

const dashboardLinks = [
  'https://app.thebricks.com/file/06f11552-8a69-45f6-8980-7bba8890d7bc',
  'https://app.thebricks.com/file/d0f30c7d-9408-4d4a-89e3-93f04734c515',
  'https://app.thebricks.com/file/de3b4daf-4a76-475c-8e65-0d9caff4ef49',
];

const previewVideos = [
  rossmannVideo,
  creditVideo,
  playstoreVideo,
];

const projects = [
  {
    title: 'Retail Sales Forecasting for Rossmann',
    description:
      'Built a complete end-to-end pipeline for retail sales forecasting, leveraging XGBoost for high accuracy, Optuna for hyperparameter optimization, and SHAP for transparent model explainability and business insights.',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'LightGBM'],
    liveUrl: 'https://shubham-walnut-kernels.github.io/Retail_Sales_Regression/',
    imagePosition: 'left' as const,
  },
  {
    title: 'Credit Card Default Prediction',
    description:
      'Built a production-style risk classification pipeline for predicting credit card defaults using repayment history and credit utilization signals. Identified early-warning risk patterns from partial payments, non-payments, and high utilization segments.',
    techStack: ['Python', 'Classification', 'Scikit-learn', 'Machine Learning'],
    liveUrl: 'https://shubham-walnut-kernels.github.io/credit-default-prediction/',
    imagePosition: 'right' as const,
  },
  {
    title: 'Google Play Store App Analysis',
    description:
      'Analyzed large-scale app data to understand pricing strategies and user behavior. Suggested to prioritize free, Everyone-rated apps in top install categories and launch affordable premium tiers and niche 17+ apps.',
    techStack: ['Python', 'Power BI', 'Pandas', 'Matplotlib', 'Seaborn'],
    liveUrl: 'https://shubham-walnut-kernels.github.io/Play-Store-App-Review-Analysis/',
    imagePosition: 'left' as const,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-t from-[hsl(42,55%,94%)] via-background to-[hsl(45,60%,95%)] relative overflow-hidden"
    >
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
                project.imagePosition === 'right'
                  ? 'md:flex-row-reverse'
                  : 'md:flex-row'
              } gap-8 items-center`}
            >
              {/* Clickable Video Visual */}
              <div className="w-full md:w-2/5 aspect-video rounded-lg border border-border overflow-hidden relative group">
                <a
                  href={dashboardLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />

                <video
                  src={previewVideos[index]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    Open Interactive Dashboard
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
