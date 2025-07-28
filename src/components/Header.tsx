import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-20 animate-glow-pulse"></div>
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">Aanjaneya</span>
              <p className="text-xs text-muted-foreground -mt-1">Full-Stack Developer</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            {menuItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block animate-slide-in-right">
            <Button variant="gradient" onClick={() => scrollToSection('contact')} className="shadow-medium hover:shadow-large">
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-primary text-white shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-large animate-fade-in-up">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="gradient" 
                    onClick={() => scrollToSection('contact')} 
                    className="w-full shadow-medium hover:shadow-large"
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;