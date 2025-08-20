import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: experiencesRef, visibleItems } = useStaggeredAnimation(2, 0.3);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "A2R Software Intern",
      company: "A2R Software",
      period: "Jan 2025 – Jun 2025",
      location: "Remote",
      description: "Hands-on .NET project work with full-stack technologies, working on real-world applications and gaining valuable industry experience.",
      skills: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Angular"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Web-Bocket Intern",
      company: "Web-Bocket",
      period: "Jul 2024 – Dec 2024",
      location: "Remote",
      description: "Front-end tools and Angular development, focusing on creating responsive and user-friendly web interfaces.",
      skills: ["Angular", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development through internships and hands-on projects
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-slideIn"></div>
        </div>

        <div ref={experiencesRef} className="max-w-4xl mx-auto">
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30 hidden lg:block"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'animate-slide-in-left opacity-100' 
                    : 'opacity-0 -translate-x-10'
                }`}
              >
                <Card className="p-8 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-300 hover:scale-105 hover-float hover-glow group">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 ${exp.gradient} rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium hover:shadow-large relative`}>
                      <Briefcase className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-primary group-hover:scale-105 transition-transform">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 group/info hover:text-foreground transition-colors hover:scale-105">
                          <Calendar className="w-4 h-4 group-hover/info:animate-pulse" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 group/info hover:text-foreground transition-colors hover:scale-105">
                          <MapPin className="w-4 h-4 group-hover/info:animate-bounce" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default animate-bounce-in"
                            style={{ animationDelay: `${skillIndex * 0.1}s` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-7 top-12 w-3 h-3 bg-gradient-primary rounded-full shadow-glow hidden lg:block animate-pulse-glow"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
          }`}
        >
          <Card className="inline-block p-6 bg-gradient-secondary shadow-medium hover:shadow-large transition-all duration-300 group hover-float">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-2 group-hover:scale-105 transition-transform">
              Ready for New Opportunities
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Looking to contribute to exciting projects and grow as a developer
            </p>
            <Badge variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:scale-110 transition-transform cursor-default animate-pulse">
              Open to Full-time Positions
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;