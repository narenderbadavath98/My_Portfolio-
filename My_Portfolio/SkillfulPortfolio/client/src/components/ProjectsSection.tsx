import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  isSpotlight?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 hover-elevate ${project.isSpotlight ? "md:col-span-2" : ""}`}
              data-testid={`card-project-${index}`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3" data-testid={`text-project-title-${index}`}>
                {project.title}
              </h3>
              <p className="text-base text-foreground mb-4" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground" data-testid={`text-project-feature-${index}-${featureIndex}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs font-mono" data-testid={`badge-tech-${index}-${techIndex}`}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="ghost" size="sm" onClick={() => console.log(`Open ${project.githubUrl}`)} data-testid={`button-github-${index}`}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="ghost" size="sm" onClick={() => console.log(`Open ${project.liveUrl}`)} data-testid={`button-live-${index}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
