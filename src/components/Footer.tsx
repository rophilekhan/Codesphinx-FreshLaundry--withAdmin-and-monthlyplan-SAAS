import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              FreshLaundry
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional laundry services with same-day delivery. Clean, fresh, and convenient.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Wash & Fold</li>
              <li className="text-muted-foreground">Dry Cleaning</li>
              <li className="text-muted-foreground">Stain Removal</li>
              <li className="text-muted-foreground">Premium Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Clean Street</li>
              <li>Laundry District, NY 10001</li>
              <li className="mt-4">+92 (331) 2699111</li>
              <li>contact.codesphinx@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Codesphinx . All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
