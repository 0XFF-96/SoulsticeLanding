import { Facebook, Instagram, Linkedin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-soulstice-accent/30 border-t border-soulstice-border">
      <div className="bg-soulstice-primary w-full h-1"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/slogo.svg" 
                alt="Soulstice Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-heading font-bold gradient-text">soulstice</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-soulstice-muted-foreground">Email: Soulstice@Soulstice.com</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                  data-testid="footer-link-facebook"
                >
                  <Facebook className="text-2xl" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                  data-testid="footer-link-instagram"
                >
                  <Instagram className="text-2xl" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                  data-testid="footer-link-linkedin"
                >
                  <Linkedin className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-soulstice-muted-foreground">
              <span>Launched with</span>
              <Zap className="text-soulstice-primary w-4 h-4" />
              <span className="font-bold">HYPER</span>
            </div>
            <p className="text-xs text-soulstice-muted-foreground">
              The best way to fund and launch your app. Celebrating $32M raised in the past 12 months.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-4 md:text-right">
            <div>
              <h4 className="font-heading font-bold text-lg mb-2 text-soulstice-foreground">Get in Touch</h4>
              <p className="text-sm text-soulstice-muted-foreground mb-4">
                Whether you're user, partner, or investor: leave your details and we'll be in touch.
              </p>
              <Button 
                className="btn-primary"
                data-testid="footer-button-join-waitlist"
              >
                Join Waitlist
              </Button>
            </div>
            <div className="text-xs text-soulstice-muted-foreground space-x-4">
              <span>©2025 Soulstice. All rights reserved.</span>
            </div>
            <div className="flex md:justify-end space-x-4 text-xs">
              <a href="#" className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors">Term of Service</a>
              <a href="#" className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

