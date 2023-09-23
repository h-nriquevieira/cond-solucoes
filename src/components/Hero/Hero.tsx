import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Hero() {
  const breakpoints = useBreakpoint();

  return (
    <section
      style={{
        backgroundImage: 'url("../../images/hero-background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom right",
        display: "flex",
        flexDirection: breakpoints.sm ? "column" : "row",
        alignItems: breakpoints.sm ? "center" : "end",
        padding: breakpoints.md ? "2rem 1rem 0" : "3rem 8rem 0",
      }}
    >
      <div
        style={{
          textAlign: breakpoints.sm ? "center" : "start",
          display: "flex",
          flexDirection: "column",
          alignItems: breakpoints.sm ? "center" : "start",
          gap: "2rem",
          padding: "2rem 0",
          marginBottom: "auto",
        }}
      >
        <h2
          style={{
            fontSize: breakpoints.sm ? "2.5rem" : "3.5rem",
            maxWidth: "min(80%, 580px)",
          }}
        >
          A solução perfeita{" "}
          <span style={{ textTransform: "uppercase", fontWeight: "900" }}>
            para <span style={{ color: "var(--clr-secondary)" }}>você!</span>
          </span>
        </h2>
        <p
          style={{
            textAlign: breakpoints.sm ? "center" : "start",
            fontSize: "1.125rem",
            maxWidth: "400px",
          }}
        >
          Oferecemos as soluções ideais em TI, segurança, limpeza e mais!
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              fontSize: "1.25rem",
              color: "var(--clr-white)",
              background: "var(--brand-gradient)",
              padding: ".25rem 1rem",
              borderRadius: "25px",
            }}
          >
            <a style={{ all: "unset" }} href="#servicos">
              Nossos serviços
            </a>
          </button>
          <button
            style={{
              fontSize: "1.25rem",
              backgroundColor: "transparent",
              border: "2px solid var(--clr-primary)",
              padding: ".15rem 1rem",
              borderRadius: "25px",
            }}
          >
            <a href="#contato" style={{ all: "unset" }}>
              Contato
            </a>
          </button>
        </div>
      </div>
      <StaticImage
        alt="Homem sorrindo"
        src="../../images/hero-photo.png"
        style={{ maxWidth: "650px" }}
      />
    </section>
  );
}
