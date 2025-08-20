import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using ASP.NET Core, Angular, and modern web technologies.",
      gradient: "bg-gradient-primary",
      features: ["Responsive Design", "Modern UI/UX", "Cross-browser Compatibility"]
    },
    {
      icon: Code,
      title: "Backend API Development",
      description: "Robust and scalable REST APIs built with ASP.NET Core and Entity Framework for seamless data management.",
      gradient: "bg-gradient-accent",
      features: ["RESTful APIs", "Authentication", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Database Integration & Management",
      description: "Efficient database design and integration with SQL Server and MySQL for optimal data storage and retrieval.",
      gradient: "bg-gradient-secondary",
      features: ["Database Design", "Query Optimization", "Data Migration"]
    },
    {
      icon: Layers,
      title: "Frontend Development (Angular)",
      description: "Interactive and dynamic user interfaces using Angular, TypeScript, and modern frontend frameworks.",
      gradient: "bg-gradient-primary",
      features: ["Component Architecture", "State Management", "Responsive Design"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-slideIn"></div>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                servicesVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ 
                animationDelay: servicesVisible ? `${index * 0.2}s` : '0s' 
              }}
            >
              <div className="card-clean card-hover p-8 group hover-float">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${service.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hover-glow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-2 group/feature"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full group-hover/feature:scale-125 transition-transform"></div>
                        <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="card-clean p-8 bg-gradient-hero shadow-medium hover:shadow-large transition-all duration-300 group hover-float inline-block">
            <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:scale-105 transition-transform">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's discuss how I can help bring your vision to life with modern web technologies
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 group/btn"
            >
              <span className="group-hover/btn:animate-pulse">Get Started Today</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;