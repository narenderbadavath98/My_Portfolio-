import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export default function ContactSection({
  email,
  phone,
  location,
  linkedin,
  github,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-contact-title">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                    data-testid="link-contact-email"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                    data-testid="link-contact-phone"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-location">
                    {location}
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-medium text-foreground mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-linkedin"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <a
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-github"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
