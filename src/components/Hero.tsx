import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-accent rounded-full opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hey, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aanjaneya
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
                Full-Stack .NET Developer
              </h2>
              <p className="text-xl text-primary font-medium mt-2">
                Turning Code into Creative Solutions
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate .NET Developer with strong expertise in C#, ASP.NET Core, Angular, and SQL Server. 
              I enjoy creating user-centric, delightful, and impactful digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => openLink('https://github.com/Aanjaneya-27')}
                className="p-3 bg-card rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-foreground" />
              </button>
              <button 
                onClick={() => openLink('https://www.linkedin.com/in/aanjaneya-dikhit')}
                className="p-3 bg-card rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-foreground" />
              </button>
              <button 
                onClick={() => openLink('mailto:dikhitaanjaneyat03@gmail.com')}
                className="p-3 bg-card rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>
          
          {/* Right content - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={profilePicture}
                alt="Aanjaneya Dikhit"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-large"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;