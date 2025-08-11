import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development through internships and hands-on projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 ${exp.gradient} rounded-2xl flex-shrink-0`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="hidden lg:block absolute left-12 mt-20 w-0.5 h-16 bg-gradient-primary opacity-30"></div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-secondary shadow-medium">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
              Ready for New Opportunities
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Looking to contribute to exciting projects and grow as a developer
            </p>
            <Badge variant="outline" className="border-secondary-foreground/30 text-secondary-foreground">
              Open to Full-time Positions
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;