
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const techStack = [
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#ED8B00' },
    { name: 'Django', color: '#092E20' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'GitHub', color: '#181717' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Hello, I'm <br />
                <span className="gradient-text">Shiwansh Tiwari</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium">
                Frontend & Python Developer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Turning ideas into real-world solutions using code. Currently pursuing B.Tech in Computer Science and passionate about building impactful projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 glow-effect"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me <Mail className="ml-2" size={20} />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/Shiwansh2601" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/shiwansh-tiwari-8929482a6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:shiwanshtiwari281012@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center floating-animation overflow-hidden">
                {/* Personal Image Container */}
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  {/* Personal image - zoomed to show upper half of body */}
                  <img 
                    src="https://i.postimg.cc/4NX8zwgp/profile-image.jpg" 
                    alt="Shiwansh Tiwari" 
                    className="w-full h-full object-cover object-top scale-150 rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-white" style={{ display: 'none' }}>
                    ST
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8 text-lg">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-icon bg-card/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
