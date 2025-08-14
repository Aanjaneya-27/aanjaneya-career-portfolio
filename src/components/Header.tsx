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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-soft animate-slide-down' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110 group-hover:rotate-12">
                <span className="text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">Aanjaneya</span>
              <p className="text-xs text-muted-foreground -mt-1 group-hover:text-primary/70 transition-colors duration-300">Full-Stack Developer</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            {menuItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-primary/5 animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <span className="relative z-10 font-medium transition-transform duration-300 group-hover:scale-105">
                  {item.label}
                </span>
                <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] rounded-full"></span>
                <div className="absolute inset-0 bg-gradient-primary/10 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100"></div>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block animate-slide-in-right" style={{ animationDelay: '0.7s' }}>
            <Button 
              variant="gradient" 
              onClick={() => scrollToSection('contact')} 
              className="shadow-medium hover:shadow-large transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-primary text-white shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110 active:scale-95 relative overflow-hidden group animate-scale-in"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="relative z-10 transition-transform duration-300">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-scale-in" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-large transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 animate-slide-down' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:scale-105 hover:translate-x-2 group relative overflow-hidden ${
                    isMobileMenuOpen ? 'animate-slide-in-left' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  <div className="absolute inset-0 bg-gradient-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                </button>
              ))}
              <div className={`pt-4 border-t border-border ${isMobileMenuOpen ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                <Button 
                  variant="gradient" 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full shadow-medium hover:shadow-large transform transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;