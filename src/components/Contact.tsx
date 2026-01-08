import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shubhamrawat318116@gmail.com',
    href: 'mailto:shubhamrawat318116@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8076999708',
    href: 'tel:+918076999708',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Delhi, India',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: `Thanks ${formData.name}, I'll get back to you soon.`,
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-[hsl(45,60%,96%)] via-[hsl(42,55%,94%)] to-[hsl(40,50%,92%)] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-radial from-[hsl(45,55%,88%)]/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-radial from-[hsl(42,50%,86%)]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="container-wide">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-10 max-w-2xl">
          Interested in working together or have a question? Reach out through given links.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-foreground mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://linkedin.com/in/shubham-rawat-09b768297"
                      target="https://linkedin.com/in/shubham-rawat-09b768297"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} className="mr-1.5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/shubham-walnut-kernels"
                      target="https://github.com/shubham-walnut-kernels"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1.5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
