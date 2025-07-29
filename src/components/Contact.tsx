import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, type EmailData } from "@/lib/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6371114935",
      href: "tel:+916371114935",
      gradient: "bg-gradient-primary",
      description: "Call me anytime"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dikhitaanjaneyat03@gmail.com",
      href: "mailto:dikhitaanjaneyat03@gmail.com",
      gradient: "bg-gradient-accent",
      description: "Drop me a line"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "aanjaneya-dikhit",
      href: "https://www.linkedin.com/in/aanjaneya-dikhit",
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
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-300 group-hover:scale-105 border-l-4 border-l-transparent group-hover:border-l-primary">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 ${info.gradient} rounded-xl group-hover:scale-110 transition-all duration-300 shadow-medium group-hover:shadow-large`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.label}</p>
                        </div>
                        <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                        <p className="text-xs text-muted-foreground/70">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            {/* Response Time */}
            <Card className="p-6 bg-gradient-hero shadow-medium animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-foreground/10 rounded-xl">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Quick Response Time</p>
                  <p className="text-muted-foreground text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-secondary shadow-medium animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-foreground" />
                <div>
                  <p className="font-semibold text-secondary-foreground">Location</p>
                  <p className="text-secondary-foreground/80 text-sm">Available for Remote Work Worldwide</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 relative overflow-hidden">
              {/* Success overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm flex items-center justify-center z-10 animate-fade-in">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-scale-in" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                      className="w-full transition-all duration-300 focus:scale-105 focus:shadow-medium"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                      className="w-full transition-all duration-300 focus:scale-105 focus:shadow-medium"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full resize-none transition-all duration-300 focus:scale-105 focus:shadow-medium"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="contact" 
                  size="lg" 
                  className="w-full gap-2 group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </form>

              {/* Form decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;