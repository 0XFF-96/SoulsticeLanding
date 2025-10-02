import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-soulstice-bg/80 backdrop-blur-md border-b border-soulstice-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/slogo.svg" 
              alt="Soulstice Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-heading font-bold gradient-text">soulstice</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
              How it Works
            </a>
            <a href="#waitlist" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
              Waitlist
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
              data-testid="link-facebook"
            >
              <Facebook className="text-xl" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
              data-testid="link-instagram"
            >
              <Instagram className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

