import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, FileText, Store, Gamepad2, Star, Eye } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "SparkleCart",
      description: "Full-featured e-commerce platform built with ASP.NET MVC, featuring user authentication, product catalog, shopping cart, and order management system with secure payment processing.",
      icon: ShoppingCart,
      gradient: "bg-gradient-primary",
      tags: ["ASP.NET MVC", "SQL Server", "Entity Framework", "Bootstrap"],
      features: ["User Authentication", "Shopping Cart", "Payment Integration", "Admin Panel"],
      stats: { views: "2.5K", stars: "45", commits: "120+" },
      category: "E-commerce"
    },
    {
      title: "Covid Assessment Form",
      description: "Health assessment application for COVID-19 screening with form validation, data storage, and reporting capabilities using modern web technologies and responsive design.",
      icon: FileText,
      gradient: "bg-gradient-accent",
      tags: ["Bootstrap", "jQuery", "C#", "SQL Server"],
      features: ["Form Validation", "Health Screening", "Data Analytics", "Responsive Design"],
      stats: { views: "1.8K", stars: "32", commits: "85+" },
      category: "Healthcare"
    },
    {
      title: "Food Bazaar",
      description: "Online food ordering platform featuring restaurant listings, menu management, and shopping cart functionality with seamless user experience and real-time order tracking.",
      icon: Store,
      gradient: "bg-gradient-secondary",
      tags: ["HTML5", "Bootstrap", "MySQL", "JavaScript"],
      features: ["Restaurant Listings", "Menu Management", "Order Tracking", "User Reviews"],
      stats: { views: "3.2K", stars: "58", commits: "95+" },
      category: "Food & Dining"
    },
    {
      title: "Fruit-Slice Game",
      description: "Interactive web-based game with engaging animations, score tracking, and responsive controls built using vanilla JavaScript and jQuery with modern game mechanics.",
      icon: Gamepad2,
      gradient: "bg-gradient-primary",
      tags: ["JavaScript", "jQuery", "HTML5", "CSS3"],
      features: ["Game Physics", "Score System", "Animations", "Mobile Responsive"],
      stats: { views: "4.1K", stars: "72", commits: "65+" },
      category: "Gaming"
    }
  ];

  const openGithub = () => {
    window.open('https://github.com/Aanjaneya-27', '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development skills through real-world applications
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-gradient-card shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-accent rounded-full blur-2xl"></div>
              </div>

              <div className="relative p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`relative p-4 ${project.gradient} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-medium`}>
                      <project.icon className="w-6 h-6 text-white" />
                      {hoveredProject === index && (
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => window.open('https://github.com/Aanjaneya-27', '_blank')}
                      className="p-2 bg-muted/50 hover:bg-muted rounded-lg hover:scale-110 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/btn:text-foreground" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{project.stats.commits} commits</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features Grid */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground text-sm flex items-center space-x-2">
                    <div className="w-1 h-4 bg-gradient-primary rounded-full"></div>
                    <span>Key Features</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 group/feature">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full group-hover/feature:scale-125 transition-transform"></div>
                        <span className="text-xs text-muted-foreground group-hover/feature:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    onClick={() => window.open(`https://github.com/Aanjaneya-27/${project.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    className="flex-1 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                </div>
              </div>

              {/* Hover Effect Border */}
              {hoveredProject === index && (
                <div className="absolute inset-0 border-2 border-primary/30 rounded-lg animate-pulse"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="inline-block p-8 bg-gradient-hero shadow-medium hover:shadow-large transition-all duration-300 group">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Want to See More?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Check out my GitHub for more projects and contributions to open source
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="gradient" onClick={openGithub} className="gap-2 group/btn">
                  <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  View GitHub Profile
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group/btn">
                  Let's Collaborate
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;