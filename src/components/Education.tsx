import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology – Computer Science Engineering",
    institute: "VEMU Institute of Technology",
    location: "Chittoor, India",
    status: "Graduation: 2026",
    description:
      "Strong academic foundation in computer science with hands-on project work, internships, and consistent academic performance (GPA: 81%).",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              <div className="flex gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                  style={{ boxShadow: "0 0 30px hsl(187 85% 53% / 0.3)" }}
                >
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <div className="glass-card p-6 lg:p-8 flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="font-display font-bold text-xl lg:text-2xl mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-4">{edu.institute}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
