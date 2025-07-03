
import { GraduationCap, Code, Trophy, Target } from 'lucide-react';

const About = () => {
  const skills = {
    languages: ['Python', 'Java', 'C', 'JavaScript'],
    webTech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
    tools: ['Git & GitHub', 'VS Code', 'Anaconda', 'MS Office'],
    libraries: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
  };

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a drive to create meaningful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 rounded-lg p-3">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a frontend and Python developer currently in my second year of B.Tech (Computer Science and Engineering) at United Institute of Technology. I'm driven by a desire to build impactful projects, contribute to open-source, and grow in a reputed tech company.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/20 rounded-lg p-3">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    <strong>B.Tech in Computer Science and Engineering</strong><br />
                    United Institute of Technology, Prayagraj<br />
                    Currently in 2nd Year
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 rounded-lg p-3">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Goals</h3>
                  <p className="text-muted-foreground">
                    Focused on building real-world projects that make a difference, contributing to open-source communities, and securing a position at a renowned technology company where I can grow and make an impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Technical Skills</h3>
            
            <div className="grid gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold mb-4 text-primary">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold mb-4 text-accent">Web Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.webTech.map((skill) => (
                    <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold mb-4 text-primary">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold mb-4 text-accent">Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill) => (
                    <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
