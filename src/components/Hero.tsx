import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const handleScrollToExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download or view the resume
    const resumeUrl = '/Aanjaneya_Dikhit_CV_Updated.pdf';
    
    // Try to open the resume, fallback to a message if file doesn't exist
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aanjaneya_Dikhit_Resume.pdf';
    link.target = '_blank';
    
    // Check if file exists by trying to fetch it
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, trigger download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // File doesn't exist, show alert
          alert('Resume file not found. Please upload your resume PDF to the public folder as "Aanjaneya_Dikhit_CV_Updated.pdf"');
        }
      })
      .catch(() => {
        // Network error or file doesn't exist
        alert('Resume file not found. Please upload your resume PDF to the public folder as "Aanjaneya_Dikhit_CV_Updated.pdf"');
      });
  };

  // Floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-glow-pulse"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-5 animate-float-gentle"></div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-10 animate-particle-float"
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-primary rounded-full blur-sm"></div>
        </div>
      ))}

      {/* Enhanced interactive cursor effect */}
      <div 
        className="fixed pointer-events-none z-10 opacity-30 transition-all duration-500"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="w-72 h-72 bg-gradient-glow rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-gradient-card rounded-full px-4 py-2 shadow-soft mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hey, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                  Aanjaneya
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold text-muted-foreground mt-4">
                Full-Stack .NET Developer
              </h2>
              <div className="flex items-center space-x-2 mt-2">
                <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
                <p className="text-xl text-primary font-medium">
                  Turning Code into Creative Solutions
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-slide-in-left">
              Passionate .NET Developer with strong expertise in C#, ASP.NET Core, Angular, and SQL Server. 
              I enjoy creating user-centric, delightful, and impactful digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group shadow-large hover:shadow-xl"
              >
                Get In Touch
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="shadow-medium hover:shadow-large border-2 hover:border-primary/50"
              >
                View My Work
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-medium hover:shadow-large group"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Github, url: 'https://github.com/Aanjaneya-27', color: 'hover:bg-purple-100 hover:text-purple-600' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/aanjaneya-dikhit', color: 'hover:bg-blue-100 hover:text-blue-600' },
                { icon: Mail, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=dikhitaanjaneyat03@gmail.com&su=Hello%20Aanjaneya&body=Hi%20Aanjaneya,%0D%0A%0D%0AI%20would%20like%20to%20discuss...', color: 'hover:bg-green-100 hover:text-green-600' }
              ].map((social, index) => (
                <button 
                  key={index}
                  onClick={() => openLink(social.url)}
                  className={`p-4 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110 group ${social.color}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right content - Streamlined design */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-hero rounded-3xl shadow-large opacity-20 animate-particle-float"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-2xl opacity-20 animate-particle-rotate"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-secondary rounded-full opacity-15 animate-particle-float"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-all duration-300 group"
          onClick={handleScrollToExplore}
        >
          <div className="flex flex-col items-center space-y-2 text-muted-foreground group-hover:text-primary">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;