import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "SQL",
    platform: "HackerRank",
    date: "September, 2025",
    skills: ["MySQL"],
    verification: "https://image2url.com/r2/bucket3/images/1767633266064-93eb7d5a-08f7-4293-842e-f81cce3f82c3.png",
  },
  {
    name: "Python",
    platform: "Uniathena",
    date: "July, 2024",
    skills: ["Python"],
    verification: "https://image2url.com/r2/bucket2/images/1767633414752-f15d8ed1-839a-4987-b8dc-cafc53bde5a1.png",
  },
  {
    name: "AI/ML Workshop",
    platform: "ISRO",
    date: "September, 2024",
    skills: ["Machine Learning"],
    verification: "https://image2url.com/r2/bucket2/images/1767633473554-14c989f1-39df-4050-89e0-a13095e44cba.png",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and continuous learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="cert-card group"
            >
              {/* Certificate image preview */}
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-secondary/50">
                <img
                  src={cert.verification}
                  alt={`${cert.name} Certificate`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{cert.platform}</p>

                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {cert.date}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
