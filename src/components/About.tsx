import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code2, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "jQuery", level: 82 },
      { name: "Angular", level: 85 }
    ],
    backend: [
      { name: "ASP.NET MVC", level: 90 },
      { name: "ASP.NET Core", level: 88 },
      { name: "Entity Framework", level: 85 },
      { name: "C#", level: 92 }
    ],
    database: [
      { name: "SQL Server", level: 87 },
      { name: "Node.js", level: 75 },
      { name: "RESTful APIs", level: 80 }
    ]
  };

  const SkillBar = ({ skill, index, categoryDelay = 0 }: { skill: { name: string; level: number }, index: number, categoryDelay: number }) => (
    <div 
      className="space-y-2 animate-fade-in-up"
      style={{ animationDelay: `${categoryDelay + index * 0.1}s` }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${categoryDelay + index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and technical expertise
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">My Story</h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  Passionate and highly motivated .NET Developer with a strong foundational understanding of C#, 
                  ASP.NET Core, and ASP.NET MVC. I bring hands-on experience in building dynamic web applications, 
                  working with databases, and creating responsive user interfaces.
                </p>
                <p className="leading-relaxed">
                  My expertise spans both front-end and back-end development, with proficiency in Angular, Entity Framework, 
                  and SQL Server. I'm committed to writing clean, efficient code and continuously expanding my technical skills 
                  to stay current with industry best practices.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "7+", label: "Months Experience", icon: TrendingUp },
                { number: "10+", label: "Projects Completed", icon: Code2 },
                { number: "2", label: "Internships", icon: Award }
              ].map((stat, index) => (
                <Card key={index} className="p-4 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="text-center space-y-2">
                    <stat.icon className="w-6 h-6 text-primary mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Education */}
            <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-foreground mb-3">Education</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="font-medium text-foreground">B.Tech in Computer Science</p>
                      <p className="text-sm text-muted-foreground">College Of Engineering Bhubaneswar (2021–2025)</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-primary font-medium">SGPA: 6.75</span>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="font-medium text-foreground">Intermediate</p>
                      <p className="text-sm text-muted-foreground">Draupadi Higher Secondary School</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-secondary font-medium">Score: 71%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
            
            {/* Frontend Skills */}
            <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-secondary rounded-lg">
                    <Code2 className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Frontend Development</h4>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={0.2} />
                  ))}
                </div>
              </div>
            </Card>

            {/* Backend Skills */}
            <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Backend Development</h4>
                </div>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={0.6} />
                  ))}
                </div>
              </div>
            </Card>

            {/* Database Skills */}
            <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-accent rounded-lg">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Additional Technologies</h4>
                </div>
                <div className="space-y-4">
                  {skills.database.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} categoryDelay={1.0} />
                  ))}
                </div>
              </div>
            </Card>

            {/* Learning Badge */}
            <Card className="p-6 bg-gradient-secondary shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-secondary-foreground group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-lg text-secondary-foreground">Always Learning</h4>
                  <p className="text-secondary-foreground/80">
                    Continuously expanding my skills and staying updated with the latest technologies
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;