import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, FileText, Store, Gamepad2, Star, Eye } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, visibleItems, isVisible: projectsVisible } = useStaggeredAnimation(4, 0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const projects = [
    {
      title: "BrandBOX-Clone App",
      description: "A full-stack e-commerce web application clone using HTML, CSS, and JavaScript.",
      icon: ShoppingCart,
      gradient: "bg-gradient-primary",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Responsive Design", "Product Catalog", "User Interface", "Modern Styling"],
      stats: { views: "1.2K", stars: "28", commits: "65+" },
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
    window.open('https://github.com/Aanjaneya-27', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development skills through real-world applications
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-slideIn"></div>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'animate-zoom-in opacity-100' 
                  : 'opacity-0 scale-75'
              }`}
            >
              <Card 
                className="relative overflow-hidden bg-gradient-card shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer hover-float hover-glow"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openGithub()}
                role="link"
                tabIndex={0}
                aria-label={`Open GitHub profile from ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openGithub();
                  }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-accent rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`relative p-4 ${project.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium`}>
                        <project.icon className="w-6 h-6 text-white" />
                        {hoveredProject === index && (
                          <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="mt-1 text-xs animate-bounce-in">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open('https://github.com/Aanjaneya-27', '_blank', 'noopener,noreferrer');
                        }}
                        className="p-2 bg-muted/50 hover:bg-muted rounded-lg hover:scale-110 hover:rotate-12 transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 text-muted-foreground group-hover/btn:text-foreground animate-rotate-in" />
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1 hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4 animate-pulse" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:scale-110 transition-transform">
                      <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
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
                      <div className="w-1 h-4 bg-gradient-primary rounded-full animate-pulse-glow"></div>
                      <span>Key Features</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 group/feature">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full group-hover/feature:scale-150 group-hover/feature:animate-pulse transition-all"></div>
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open('https://github.com/Aanjaneya-27', '_blank', 'noopener,noreferrer');
                      }}
                      className="flex-1 group/btn hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all" />
                      View Code
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-lg animate-pulse"></div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
          }`}
        >
          <Card className="inline-block p-8 bg-gradient-hero shadow-medium hover:shadow-large transition-all duration-300 group hover-float">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground group-hover:scale-105 transition-transform">
                Want to See More?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Check out my GitHub for more projects and contributions to open source
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="gradient" onClick={openGithub} className="gap-2 group/btn hover:scale-105 transition-all">
                  <Github className="w-4 h-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all" />
                  View GitHub Profile
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group/btn hover:scale-105 transition-all">
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