"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "TypeScript / JavaScript",
  "Python",
  "SQL & NoSQL databases",
  "REST & GraphQL APIs",
  "Cloud platforms",
  "Docker & CI/CD",
  "AI / LLM integration",
  "System design",
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ paddingBottom: "8rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label" style={{ marginBottom: "2.5rem" }}>
          01. about
        </span>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="about-grid"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Full stack developer with experience across enterprise and
              product environments. I adapt to the stack the problem demands —
              picking up new languages and frameworks is just part of the job.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I integrate AI tooling — LLMs, agentic workflows, and
              AI-assisted development — into my workflow to move faster without
              cutting corners on quality or reliability.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I care about code that&apos;s easy to reason about, systems
              that scale predictably, and teams that don&apos;t dread touching
              the codebase six months later.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              // stack
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
