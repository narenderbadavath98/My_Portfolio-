import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-experience-title">
          Work Experience
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-testid={`card-experience-${index}`}>
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-primary items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <Card className="md:ml-24 p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </h3>
                      <p className="text-base text-primary font-medium" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" data-testid={`badge-duration-${index}`}>
                      {exp.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-sm md:text-base text-foreground mb-4" data-testid={`text-description-${index}`}>
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs" data-testid={`badge-exp-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
