import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code2 } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Angular"],
    backend: ["ASP.NET MVC", "ASP.NET Core", "Entity Framework", "C#"],
    database: ["SQL Server", "MySQL"]
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                Passionate and highly motivated .NET Developer with a strong foundational understanding of C#, 
                ASP.NET Core, and ASP.NET MVC. I bring hands-on experience in building dynamic web applications, 
                working with databases, and creating responsive user interfaces.
              </p>
              <p className="leading-relaxed mt-4">
                My expertise spans both front-end and back-end development, with proficiency in Angular, Entity Framework, 
                and SQL Server. I'm committed to writing clean, efficient code and continuously expanding my technical skills 
                to stay current with industry best practices.
              </p>
            </div>

            {/* Education */}
            <Card className="p-6 bg-gradient-card shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Education</h4>
                  <div className="space-y-2 mt-2">
                    <div>
                      <p className="font-medium text-foreground">B.Tech in Computer Science</p>
                      <p className="text-sm text-muted-foreground">College Of Engineering Bhubaneswar (2021–2025)</p>
                      <p className="text-sm text-primary font-medium">SGPA: 6.75</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Intermediate</p>
                      <p className="text-sm text-muted-foreground">Draupadi Higher Secondary School</p>
                      <p className="text-sm text-primary font-medium">Score: 71%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Technical Skills</h3>
            
            <Card className="p-6 bg-gradient-card shadow-soft">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="w-5 h-5 text-secondary" />
                    <h4 className="font-semibold text-foreground">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-secondary shadow-soft">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-secondary-foreground" />
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