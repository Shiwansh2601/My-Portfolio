
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Shiwansh Tiwari</h3>
            <p className="text-muted-foreground">
              Frontend & Python Developer passionate about creating meaningful solutions and contributing to the tech community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Shiwansh2601"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/50 p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shiwansh-tiwari-8929482a6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/50 p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shiwanshtiwari281012@gmail.com"
                className="bg-background/50 p-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Shiwansh Tiwari. Made with <Heart className="text-red-500" size={16} /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
