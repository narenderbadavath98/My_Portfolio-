import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  gpa: string;
  duration: string;
  location: string;
}

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-education-title">
          Education
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 md:p-8" data-testid={`card-education-${index}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2" data-testid={`text-institution-${index}`}>
                {edu.institution}
              </h3>
              
              <p className="text-sm md:text-base text-foreground mb-2" data-testid={`text-degree-${index}`}>
                {edu.degree}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                <span data-testid={`text-gpa-${index}`}>{edu.gpa}</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p data-testid={`text-duration-${index}`}>{edu.duration}</p>
                <p data-testid={`text-location-${index}`}>{edu.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
