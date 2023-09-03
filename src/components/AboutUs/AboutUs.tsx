import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function AboutUs() {
  const breakpoints = useBreakpoint();

  const pStyles = {
    fontSize: breakpoints.sm ? ".875rem" : "1.125rem",
    fontWeight: "400",
    marginTop: "1rem",
    lineHeight: "120%",
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "4rem 2rem",
      }}
    >
      {breakpoints.sm ? (
        <StaticImage
          src="../../images/quem-somos-mobile.png"
          alt="Homem vestindo um terno azul claro."
          objectFit="contain"
        />
      ) : (
        <StaticImage
          src="../../images/quem-somos-desktop.png"
          alt="Homem vestindo um terno azul claro."
          objectFit="contain"
        />
      )}
      <div style={{ maxWidth: "min(50%, 500px)" }}>
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "300",
            maxWidth: breakpoints.sm ? "100px" : "100%",
          }}
        >
          Quem{" "}
          <span
            style={{
              fontWeight: "800",
              color: "var(--clr-secondary)",
            }}
          >
            Somos
          </span>
        </h2>
        <p style={pStyles}>
          A Cond Soluções fornecedora de soluções abrangentes em segurança
          eletrônica, informática e produtos essenciais para residências e
          empresa. Sempre comprometidos em atender as necessidades individuais
          de cada cliente e proporcionar soluções personalizadas que atendam de
          maneira eficaz.
        </p>
        {!breakpoints.sm && (
          <p style={pStyles}>
            Excelência e compromisso é nossa bússola e sempre dedicados em
            garantir tranquilidade, proteção e eficiência aos nossos clientes
            por meio de produtos e serviços de alta qualidade.
          </p>
        )}
      </div>
    </section>
  );
}
