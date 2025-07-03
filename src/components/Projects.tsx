import { ExternalLink, Github, BarChart3, Mic, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Movie Data Analysis',
      description: 'Comprehensive data analysis project that cleaned, analyzed, and visualized Netflix movie data using Python libraries including NumPy, Pandas, Matplotlib, and Seaborn to extract meaningful insights.',
      icon: BarChart3,
      tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/Shiwansh2601/Netflix-Data-Analysis',
      // No live link
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Personal Voice Assistant',
      description: 'Interactive voice assistant built with Python that responds to voice commands, includes text-to-speech functionality, web search capabilities, and entertainment features like joke-telling.',
      icon: Mic,
      tech: ['Python', 'Speech Recognition', 'Text-to-Speech', 'Web APIs'],
      github: 'https://github.com/Shiwansh2601/Voice-Assistant',
      // No live link
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Amazon Clone',
      description: 'Pixel-perfect static replica of Amazon\'s homepage created using only HTML and CSS, demonstrating strong frontend skills and attention to detail in UI replication.',
      icon: ShoppingCart,
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Shiwansh2601/Amazon-Clone',
      live: 'https://clever-chimera-c6a04b.netlify.app/', // Add live link here if you have it deployed
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card bg-card/50 backdrop-blur-sm rounded-2xl p-6 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${project.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="sm" variant="outline" className="w-full">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
