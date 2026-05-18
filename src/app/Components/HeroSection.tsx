"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          // full stack developer
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "220px" }}>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 8vw, 5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Mhd Ajfer
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                  color: "var(--accent)",
                  fontWeight: 400,
                }}
              >
                building things for the web
              </span>
              <span className="cursor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "32rem",
              }}
            >
              Full stack developer who cares about clean architecture,
              maintainable systems, and shipping software that holds up. I work
              across the full stack — from system design to production.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                padding: "2px",
                background:
                  "linear-gradient(135deg, var(--accent), transparent)",
              }}
            >
              <Image
                src="/profile-pic.jpg"
                alt="Mhd Ajfer"
                width={100}
                height={100}
                priority
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
