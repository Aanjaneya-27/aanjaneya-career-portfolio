import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Aanjaneya Dikhit</h3>
              <p className="text-background/70 text-sm">Full-Stack .NET Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-background/70 text-sm mb-2">Quick Navigation</p>
            <div className="flex justify-center space-x-6 text-sm">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <button 
              onClick={() => openLink('https://github.com/Aanjaneya-27')}
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openLink('https://www.linkedin.com/in/aanjaneya-dikhit')}
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openLink('mailto:dikhitaanjaneyat03@gmail.com')}
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm flex items-center justify-center gap-1">
            © 2025 Aanjaneya Dikhit. Made with 
            <Heart className="w-4 h-4 text-red-400 fill-current" /> 
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;