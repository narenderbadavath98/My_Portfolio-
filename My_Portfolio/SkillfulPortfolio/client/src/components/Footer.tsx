import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
}

export default function Footer({ name, email, linkedin, github }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-footer-name">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Full Stack Engineer specializing in Python, Django, and AI Integration
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-primary text-left"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-email"
              >
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-linkedin"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-github"
              >
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
