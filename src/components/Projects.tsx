import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, FileText, Store, Gamepad2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SparkleCart",
      description: "Full-featured e-commerce platform built with ASP.NET MVC, featuring user authentication, product catalog, shopping cart, and order management system.",
      icon: ShoppingCart,
      gradient: "bg-gradient-primary",
      tags: ["ASP.NET MVC", "SQL Server", "Entity Framework", "Bootstrap"],
      features: ["User Authentication", "Shopping Cart", "Payment Integration", "Admin Panel"]
    },
    {
      title: "Covid Assessment Form",
      description: "Health assessment application for COVID-19 screening with form validation, data storage, and reporting capabilities using modern web technologies.",
      icon: FileText,
      gradient: "bg-gradient-accent",
      tags: ["Bootstrap", "jQuery", "C#", "SQL Server"],
      features: ["Form Validation", "Health Screening", "Data Analytics", "Responsive Design"]
    },
    {
      title: "Food Bazaar",
      description: "Online food ordering platform featuring restaurant listings, menu management, and shopping cart functionality with seamless user experience.",
      icon: Store,
      gradient: "bg-gradient-secondary",
      tags: ["HTML5", "Bootstrap", "MySQL", "JavaScript"],
      features: ["Restaurant Listings", "Menu Management", "Order Tracking", "User Reviews"]
    },
    {
      title: "Fruit-Slice Game",
      description: "Interactive web-based game with engaging animations, score tracking, and responsive controls built using vanilla JavaScript and jQuery.",
      icon: Gamepad2,
      gradient: "bg-gradient-primary",
      tags: ["JavaScript", "jQuery", "HTML5", "CSS3"],
      features: ["Game Physics", "Score System", "Animations", "Mobile Responsive"]
    }
  ];

  const openGithub = () => {
    window.open('https://github.com/Aanjaneya-27', '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 ${project.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={openGithub}
                      className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <Github className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button 
                      onClick={openGithub}
                      className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-hero shadow-medium">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <Button variant="gradient" onClick={openGithub} className="gap-2">
              <Github className="w-4 h-4" />
              View GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;