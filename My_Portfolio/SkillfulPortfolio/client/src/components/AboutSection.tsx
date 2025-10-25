import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  bio: string;
  stats: Array<{ label: string; value: string }>;
}

export default function AboutSection({ bio, stats }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center" data-testid="text-about-title">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-base md:text-lg text-foreground leading-relaxed whitespace-pre-line" data-testid="text-about-bio">
              {bio}
            </p>
          </div>
          
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6" data-testid={`card-stat-${index}`}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
