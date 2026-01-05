import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end applications with modern technologies",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Breaking down complex problems into elegant solutions",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering impactful, production-ready code",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Thriving in collaborative, innovative environments",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">Motivated Computer Science graduate</span> with hands-on experience in software development and AI-driven projects, strong full-stack fundamentals, and a passion for building real-world solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science Engineering student currently pursuing my B.Tech at VEMU Institute of Technology. I have a strong interest in software development and enjoy building practical solutions using Java, Python, HTML, CSS, JavaScript, and SQL.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am gaining real-world industry exposure as a Software Developer Intern at Tap Academy, where I work on developing and testing applications in a structured development environment. I have also completed internships in Python Programming and Artificial Intelligence & Data Analytics.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My goal is to grow into a skilled Software Developer, contribute to impactful projects, and work in a collaborative environment that encourages innovation and learning.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
