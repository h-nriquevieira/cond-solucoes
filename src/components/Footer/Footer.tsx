import { useBreakpoint } from "gatsby-plugin-breakpoints";
import React from "react";

export default function Footer() {
  const breakpoints = useBreakpoint();

  const styles = {
    heading: {
      color: "var(--clr-white)",
      fontWeight: "700",
      fontSize: breakpoints.sm ? ".625rem" : "1.125rem",
      lineHeight: "115%",
    },
    p: {
      color: "var(--clr-white)",
      fontSize: breakpoints.sm ? ".625rem" : "1.125rem",
      fontWeight: "300",
      lineHeight: "115%",
      letterSpacing: ".05em",
    },
    secondP: {
      color: "var(--clr-darker-gray)",
      fontSize: breakpoints.sm ? ".55rem" : "1rem",
    },
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--clr-primary)",
        padding: breakpoints.sm ? "4rem 1rem" : "4rem 8rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: breakpoints.sm ? "column" : "row",
          alignItems: "start",
          minWidth: "100%",
          maxWidth: "100vw",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ maxWidth: breakpoints.sm ? "100px" : "100%" }}>
          <h4 style={{ ...styles.heading }}>Cond Soluções</h4>
          <p style={{ ...styles.p }}>
            Rua Euclides da Cunha, 97 Centro - Itu - 13300-015
          </p>
          <p style={{ ...styles.p }}>comercial@condsolucoes.com.br</p>
          <p style={{ ...styles.p }}>(11) 4022-8884</p>
        </div>
        <p style={{ ...styles.p }}>
          TI - Segurança Papelaria - Limpeza - Descartáveis
        </p>
        <a href="#contato" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: ".75rem 1rem",
              backgroundColor: "var(--clr-white)",
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              fontSize: breakpoints.sm ? ".625rem" : "1rem",
              borderRadius: "10px",
            }}
          >
            entre em <span style={{ fontWeight: "800" }}>contato</span>
          </button>
        </a>
      </div>
      <div
        style={{
          marginTop: breakpoints.sm ? "2rem" : "4rem",
          display: "flex",
          flexDirection: breakpoints.sm ? "column" : "row",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ ...styles.secondP, maxWidth: "500px" }}>
          CONDOTECH SOLUCOES INTELIGENTES LTDA - 2023 Todos os direitos
          reservados
        </p>
        <p style={{ ...styles.secondP }}>
          2023 Site criado por{" "}
          <a
            href="https://www.growing.ag/"
            target="blank"
            style={{ color: "var(--clr-white)", textDecoration: "none" }}
          >
            Growing.ag
          </a>
        </p>
        <p style={{ ...styles.secondP }}>
          Termos de Uso - Política de Privacidade
        </p>
      </div>
    </footer>
  );
}
