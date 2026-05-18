"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const links = [
  {
    label: "ajferaju9961@gmail.com",
    href: "mailto:ajferaju9961@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    label: "github.com/mhdajfer",
    href: "https://github.com/mhdajfer",
    icon: FaGithub,
  },
  {
    label: "linkedin.com/in/muhammed-ajfer-kh",
    href: "https://www.linkedin.com/in/muhammed-ajfer-kh/",
    icon: FaLinkedin,
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ paddingBottom: "4rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label" style={{ marginBottom: "2.5rem" }}>
          04. contact
        </span>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Let&apos;s work together.
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "32rem",
            marginBottom: "2.5rem",
          }}
        >
          Open to interesting problems, collaborative projects, and the
          occasional hard conversation about software architecture.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map(({ label, href, icon: Icon }) => (
            <ContactLink key={href} label={label} href={href} Icon={Icon} />
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            marginTop: "5rem",
            letterSpacing: "0.05em",
          }}
        >
          {'// built with Next.js'} &mdash; {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
};

function ContactLink({
  label,
  href,
  Icon,
}: {
  label: string;
  href: string;
  Icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        color: "var(--text-secondary)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        transition: "color 0.2s",
        width: "fit-content",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color =
          "var(--text-secondary)")
      }
    >
      <Icon style={{ fontSize: "0.9rem", color: "inherit" }} />
      {label}
    </a>
  );
}

export default ContactSection;
