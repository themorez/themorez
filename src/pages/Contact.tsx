import { useState, useRef } from "react";
import Header from "@/components/Header";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      formRef.current?.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            For teaching opportunities, translation work, academic collaboration, or editorial projects—feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <iframe name="hidden_iframe_contact" style={{display:'none'}}></iframe>
            {submitted && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-accent/20 text-accent-foreground mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">Your message has been sent!</span>
              </div>
            )}
            <form ref={formRef} action="https://www.form-to-email.com/api/s/jwy5OgVihTZp" method="POST" encType="multipart/form-data" target="hidden_iframe_contact" onSubmit={handleSubmit} className="space-y-6 animate-slide-up stagger-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell me what's on your mind..." />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:m.amin.rezai@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">m.amin.rezai@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+989150616788" className="text-muted-foreground hover:text-primary transition-colors">+98 915 061 6788</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Gonābād, Razavi Khorasan, Iran</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-8">
              <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://t.me/maminre" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Telegram</a>
                <a href="https://instagram.com/maminrezai" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">Instagram</a>
                <a href="https://x.com/AminReformist" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">X / Twitter</a>
                <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
