"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="projects" ref={ref} style={{ paddingBottom: "8rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label" style={{ marginBottom: "2.5rem" }}>
          02. projects
        </span>

        <a
          href="https://github.com/mhdajfer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            style={{
              border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
              padding: "2rem",
              transition: "border-color 0.25s, background-color 0.25s",
              backgroundColor: hovered ? "var(--accent-dim)" : "transparent",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Open source work
              </h3>
              <FaGithub
                style={{
                  fontSize: "1.2rem",
                  color: hovered ? "var(--accent)" : "var(--text-muted)",
                  transition: "color 0.25s",
                  flexShrink: 0,
                }}
              />
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                margin: 0,
              }}
            >
              A collection of full stack projects — APIs, applications, and
              tools built with the MERN stack, Next.js, and TypeScript.
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaGithub style={{ fontSize: "0.85rem" }} />
                github.com/mhdajfer
              </span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
