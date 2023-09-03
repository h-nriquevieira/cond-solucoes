import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Contact() {
  const breakpoints = useBreakpoint();

  const styles = {
    heading: {
      fontWeight: "700",
      fontSize: breakpoints.sm ? ".625rem" : "1.375rem",
      color: "var(--clr-white)",
      marginTop: ".5rem",
    },
    p: {
      fontWeight: "300",
      fontSize: breakpoints.sm ? ".5rem" : "1rem",
      color: "var(--clr-white)",
      marginTop: ".5rem",
      marginBottom: "1rem",
      maxWidth: "100%",
    },
  };

  return (
    <section
      style={{
        padding: "6rem 2rem",
        display: "grid",
        placeItems: "center",
        borderRadius: "25px",
      }}
    >
      <div style={{ position: "relative" }}>
        <StaticImage
          src="../../images/map.png"
          alt="Mapa da localização"
          style={{ borderRadius: "30px" }}
        />
        <div
          style={{
            position: "absolute",
            background: "var(--brand-translucent-gradient)",
            top: "50%",
            right: "25px",
            zIndex: "2",
            transform: "translateY(-50%)",
            padding: "1.5rem",
            maxWidth: "40%",
            borderRadius: "30px",
            backdropFilter: "blur(2px)",
          }}
        >
          <h2
            style={{
              color: "var(--clr-white)",
              textTransform: "uppercase",
              fontSize: breakpoints.sm ? ".75rem" : "1.25rem",
              fontWeight: "300",
            }}
          >
            Venha nos <br />{" "}
            <span style={{ fontWeight: "900", color: "var(--clr-white)" }}>
              fazer uma visita
            </span>
            :
          </h2>
          <p style={{ ...styles.p }}>
            Rua dos Bobos, 0 Logo Ali, CDC SP - 00000-000
          </p>
          <h3 style={{ ...styles.heading }}>Horários:</h3>
          <p style={{ ...styles.p }}>Seg-Sex: das 08:00 às 18:00</p>
          <h3 style={{ ...styles.heading }}>Telefone:</h3>
          <p
            style={{
              ...styles.p,
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <StaticImage
              src="../../images/whatsapp-icon.svg"
              alt="Ícone do WhatsApp"
              style={{ maxWidth: "15px" }}
            />{" "}
            (11) 4022-8884
          </p>
          <h3 style={{ ...styles.heading }}>Email:</h3>
          <p style={{ ...styles.p, wordWrap: "anywhere" }}>
            comercial@condsolucoes.com.br
          </p>
        </div>
      </div>
    </section>
  );
}
