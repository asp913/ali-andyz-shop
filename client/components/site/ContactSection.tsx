import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/aliandandyz",
    label: "Instagram"
  },
  {
    icon: Facebook,
    href: "https://facebook.com/aliandandyz",
    label: "Facebook"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/aliandandyz",
    label: "Twitter"
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-wide mb-6">
              Get in Touch
            </h2>
            <p className="text-lg font-light text-muted-foreground mb-8 leading-relaxed">
              Questions about sizing, styling, or our collections? We're here to help you find the perfect pieces for your capsule wardrobe.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-foreground/70 mt-1" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">Email Us</h3>
                  <a 
                    href="mailto:hello@aliandandyz.com" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@aliandandyz.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-foreground/70 mt-1" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">Studio</h3>
                  <p className="text-sm text-muted-foreground">
                    Los Angeles, California<br />
                    By appointment only
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-foreground mb-4">Follow Our Journey</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-xl font-light text-foreground mb-6">Hours & Assistance</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Customer Service</span>
                <span className="text-foreground">Mon-Fri, 9AM-6PM PST</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Styling Consultation</span>
                <span className="text-foreground">By appointment</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Private Shopping</span>
                <span className="text-foreground">Available in LA</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-background rounded-sm">
              <h4 className="text-sm font-medium text-foreground mb-2">Personal Styling</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a complimentary consultation with our styling team to curate your perfect capsule collection.
              </p>
              <a 
                href="mailto:styling@aliandandyz.com"
                className="text-sm text-foreground hover:text-primary transition-colors underline"
              >
                Book Your Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
