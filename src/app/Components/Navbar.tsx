"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "border-color 0.3s, background-color 0.3s",
        borderBottom:
          scrolled || isOpen
            ? "1px solid var(--border)"
            : "1px solid transparent",
        backgroundColor:
          scrolled || isOpen ? "rgba(13,13,13,0.85)" : "transparent",
        backdropFilter: scrolled || isOpen ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          MA_
        </a>

        {/* Desktop links */}
        <ul
          className="nav-desktop"
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              backgroundColor: "var(--text-secondary)",
              transition: "transform 0.2s, opacity 0.2s",
              transform: isOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              backgroundColor: "var(--text-secondary)",
              transition: "opacity 0.2s",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              backgroundColor: "var(--text-secondary)",
              transition: "transform 0.2s, opacity 0.2s",
              transform: isOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className="nav-mobile-menu"
        style={{
          display: "none",
          overflow: "hidden",
          maxHeight: isOpen ? "300px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "1rem 1.5rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
