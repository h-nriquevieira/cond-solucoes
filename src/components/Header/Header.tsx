import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import MobileSidebarMenu from "../MobileSidebarMenu/MobileSidebarMenu";
import { useSpring } from "@react-spring/web";

export default function Header() {
  const breakpoints = useBreakpoint();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: breakpoints.sm ? "1rem" : "1rem 5%",
          gap: "1.5rem",
          boxShadow: "0px 3px 21px -4px rgba(0,0,0,0.35)",
        }}
      >
        <StaticImage
          src="../../images/logo.png"
          alt="Logo da Cond Soluções"
          style={{ maxWidth: breakpoints.sm ? "200px" : "100%" }}
        />
        {!breakpoints.sm && (
          <>
            <a style={{ marginLeft: "auto", fontSize: "1.25rem" }}>Serviços</a>
            <button
              style={{
                fontSize: "1.25rem",
                color: "var(--clr-white)",
                background: "var(--brand-gradient)",
                padding: ".5rem 1rem",
                borderRadius: "25px",
              }}
            >
              Contato
            </button>
          </>
        )}
        <button
          style={{
            background: "var(--brand-gradient)",
            borderRadius: "100%",
            padding: ".5rem",
            marginLeft: breakpoints.sm ? "auto" : "0",
          }}
        >
          <a>
            <StaticImage
              src="../../images/whatsapp-icon.svg"
              alt="Ícone do WhatsApp"
              style={{ maxWidth: "25px" }}
            />
          </a>
        </button>
        {breakpoints.sm && (
          <button onClick={toggleMenu}>
            <StaticImage src="../../images/menu-icon.png" alt="Menu" />
          </button>
        )}
      </header>
      {isMobileMenuOpen && (
        <MobileSidebarMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      )}
    </>
  );
}
