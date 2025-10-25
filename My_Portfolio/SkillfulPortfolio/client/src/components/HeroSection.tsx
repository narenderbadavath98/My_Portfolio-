import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import heroImage from "@assets/my pic_1761373804515.jpg";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  onViewProjects: () => void;
  onDownloadResume: () => void;
}

export default function HeroSection({
  name,
  title,
  tagline,
  email,
  phone,
  linkedin,
  github,
  onViewProjects,
  onDownloadResume,
}: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4" data-testid="text-hero-name">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6" data-testid="text-hero-title">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-tagline">
              {tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={onViewProjects} size="lg" data-testid="button-view-projects">
                View Projects
              </Button>
              <Button onClick={onDownloadResume} variant="outline" size="lg" data-testid="button-download-resume">
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-email"
              >
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={`tel:${phone}`}
                data-testid="link-phone"
              >
                <Button variant="ghost" size="icon">
                  <Phone className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Badavath Narender - Professional Photo"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
