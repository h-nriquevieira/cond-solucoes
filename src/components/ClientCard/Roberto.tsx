import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Roberto() {
  const breakpoints = useBreakpoint();

  return (
    <div
      style={{
        backgroundColor: "var(--clr-white)",
        borderRadius: "30px",
        minWidth: breakpoints.sm ? "min(120vw, 400px)" : "580px",
        boxShadow: "0px 10px 37px 0px rgba(0,0,0,0.75)",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
        <div
          style={{
            backgroundColor: "var(--clr-primary)",
            borderTopLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            display: "grid",
            placeContent: "center",
            padding: "2rem",
          }}
        >
          <StaticImage src="../../images/quotes.svg" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          {/* <div
            style={{
              minWidth: "80px",
              minHeight: "80px",
              borderRadius: "100%",
              backgroundColor: "var(--clr-secondary)",
            }}
          ></div> */}
          <StaticImage
            src="../../images/roberto-silva.jpeg"
            alt=""
            style={{
              aspectRatio: "1 / 1",
              maxWidth: "80px",
              maxHeight: "80px",
              borderRadius: "100%",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: "800",
                textTransform: "uppercase",
                fontSize: breakpoints.sm ? ".625rem" : "1.25rem",
                letterSpacing: ".1em",
              }}
            >
              Roberto Silva
            </p>
            <p
              style={{
                fontWeight: "300",
                marginTop: ".5rem",
                fontSize: breakpoints.sm ? ".5rem" : ".875rem",
                letterSpacing: ".1em",
              }}
            >
              Síndico
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          padding: breakpoints.sm ? "2rem 1.5rem" : "2rem 3rem",
          color: "var(--clr-black)",
          letterSpacing: ".12em",
          lineHeight: "110%",
          fontWeight: "300",
        }}
      >
        A Cond Soluções apareceu em uma hora perfeita, o condominio estava
        passando por reestruturação de segurança e eles forneceram tudo que
        precisávamos. Desde equipamentos de segurança, instalação e treinamento.
        Recomendo muito.
      </p>
    </div>
  );
}
