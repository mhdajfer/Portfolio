"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    company: "Markovate",
    title: "Full Stack Developer",
    period: "May 2025 – Present",
    description:
      "Building and shipping full stack features in a product-focused environment. Working across the entire delivery lifecycle with a strong emphasis on AI-integrated workflows and developer velocity.",
  },
  {
    company: "Infosys Ltd",
    title: "Systems Associate",
    period: "Oct 2021 – 2024",
    description:
      "Contributed to production software systems at enterprise scale. Gained depth in reliability engineering, structured delivery processes, and cross-functional collaboration across large teams.",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} style={{ paddingBottom: "8rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label" style={{ marginBottom: "2.5rem" }}>
          03. experience
        </span>

        {experience.map((role, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.75rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              borderTop: "1px solid var(--border)",
            }}
            className="exp-row"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              {role.period}
            </p>

            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                  marginBottom: "0.3rem",
                }}
              >
                {role.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  margin: 0,
                  marginBottom: "0.9rem",
                  letterSpacing: "0.03em",
                }}
              >
                {role.company}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {role.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (min-width: 640px) {
          .exp-row {
            grid-template-columns: 160px 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
