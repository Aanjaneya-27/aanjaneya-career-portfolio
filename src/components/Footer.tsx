import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
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
          <p className="text-background/70 text-sm">
            © 2025 Aanjaneya Dikhit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;