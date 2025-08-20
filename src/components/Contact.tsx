import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, type EmailData } from "@/lib/emailjs";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactInfoRef, visibleItems } = useStaggeredAnimation(4, 0.15);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailData: EmailData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await sendEmail(emailData);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus on the first input field
      const nameInput = document.querySelector('#name') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6371114935",
      href: "tel:+916371114935",
      gradient: "bg-gradient-primary",
      description: "Call me anytime",
      onClick: null
    },
    {
      icon: Mail,
      label: "Email",
      value: "dikhitaanjaneyat03@gmail.com",
      href: "#",
      gradient: "bg-gradient-accent",
      description: "Drop me a line",
      onClick: handleEmailClick
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "aanjaneya-dikhit",
      href: "https://www.linkedin.com/in/aanjaneya-dikhit-5b316a37b",
      gradient: "bg-gradient-secondary",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Aanjaneya-27",
      href: "https://github.com/Aanjaneya-27",
      gradient: "bg-gradient-primary",
      description: "Check out my code"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-accent opacity-5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-slideIn"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className={`transition-all duration-700 ${visibleItems.includes(0) ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visibleItems.includes(index + 1) 
                      ? 'animate-scale-in opacity-100' 
                      : 'opacity-0 scale-90'
                  }`}
                >
                  {info.onClick ? (
                    <button
                      onClick={info.onClick}
                      className="block group text-left w-full"
                    >
                      <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-300 group-hover:scale-105 border-l-4 border-l-transparent group-hover:border-l-primary hover-float hover-glow">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 ${info.gradient} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium group-hover:shadow-large relative`}>
                            <info.icon className="w-5 h-5 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-105">
                                {info.label}
                              </p>
                            </div>
                            <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                            <p className="text-xs text-muted-foreground/70">{info.description}</p>
                          </div>
                        </div>
                      </Card>
                    </button>
                  ) : (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-300 group-hover:scale-105 border-l-4 border-l-transparent group-hover:border-l-primary hover-float hover-glow">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 ${info.gradient} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium group-hover:shadow-large relative`}>
                            <info.icon className="w-5 h-5 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-foreground group-hover:text-primary transition-colors group-hover:scale-105">
                                {info.label}
                              </p>
                            </div>
                            <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                            <p className="text-xs text-muted-foreground/70">{info.description}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className={`transition-all duration-700 ${visibleItems.includes(5) ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'}`}>
              <Card className="p-6 bg-gradient-hero shadow-medium hover:shadow-large transition-all duration-300 hover-float">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-foreground/10 rounded-xl animate-pulse">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Quick Response Time</p>
                    <p className="text-muted-foreground text-sm">I typically respond within 24 hours</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              formVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 relative overflow-hidden hover-glow">
              {/* Success overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm flex items-center justify-center z-10 animate-fade-in">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-in" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-foreground mb-6 hover:text-primary transition-colors">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full transition-all duration-300 focus:scale-105 focus:shadow-medium hover:shadow-soft"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full transition-all duration-300 focus:scale-105 focus:shadow-medium hover:shadow-soft"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="w-full resize-none transition-all duration-300 focus:scale-105 focus:shadow-medium hover:shadow-soft"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="contact" 
                  size="lg" 
                  className="w-full gap-2 group relative overflow-hidden hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all" />
                      Send Message
                    </>
                  )}
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </form>

              {/* Form decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl animate-float"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;