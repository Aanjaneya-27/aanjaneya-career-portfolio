import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownload = async () => {
    const resumeUrl = '/Aanjaneya_Dikhit_CV_Updated.pdf';

    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error('Resume not found');

      const blob = await response.blob();
      if (!blob || blob.size === 0) throw new Error('Empty file');

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Aanjaneya_Dikhit_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      toast({
        title: 'Resume downloaded',
        description: 'Thank you for your interest!',
      });
    } catch (err) {
      // Fallback: open in a new tab so user can save manually
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      toast({
        title: 'Opened resume',
        description: 'If it didn\'t download, save it from the new tab.',
      });
    }
  };

  const handleEmailClick = () => {
    const emailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=dikhitaanjaneyat03@gmail.com&su=Hello%20Aanjaneya&body=Hi%20Aanjaneya,%0D%0A%0D%0AI%20would%20like%20to%20discuss...';
    window.open(emailUrl, '_blank');
  };

  return (
    <section id="home" className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-40"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status badge */}
          <div className="animate-enter">
            <div className="inline-flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2 shadow-clean">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="animate-enter-delay space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight text-balance">
              Hi, I'm{" "}
              <span className="text-gradient-primary relative">
                Aanjaneya Dikhit
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary/60 animate-pulse" />
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground">
              Full-Stack .NET Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating robust web applications with C#, ASP.NET Core, and Angular. 
              I transform ideas into clean, efficient, and user-friendly digital solutions.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-enter-delay">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group min-w-[160px]"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[160px]"
            >
              View My Work
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleDownload}
              className="group min-w-[160px]"
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8 animate-enter-delay">
            {[
              { 
                icon: Github, 
                url: 'https://github.com/Aanjaneya-27', 
                label: 'GitHub',
                color: 'hover:text-purple-600'
              },
              { 
                icon: Linkedin, 
                url: 'https://www.linkedin.com/in/aanjaneya-dikhit-5b316a37b', 
                label: 'LinkedIn',
                color: 'hover:text-blue-600'
              },
              { 
                icon: Mail, 
                url: '#',
                onClick: handleEmailClick,
                label: 'Email',
                color: 'hover:text-green-600'
              }
            ].map((social, index) => (
              <button 
                key={index}
                onClick={social.onClick || (() => openLink(social.url))}
                className={`p-3 bg-card border border-border/50 rounded-lg shadow-clean hover:shadow-hover transition-all duration-200 card-hover group ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-all duration-200" />
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-enter-delay">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Scroll to about section"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm">Learn more about me</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;