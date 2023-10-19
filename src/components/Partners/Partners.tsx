import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Partners() {
  const breakpoints = useBreakpoint();

  return (
    <section
      style={{
        backgroundColor: "var(--clr-light-bg)",
        padding: "2rem 1rem 6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h2
        style={{
          backgroundColor: "var(--clr-white)",
          width: "150px",
          fontSize: breakpoints.sm ? "1rem" : "1.25rem",
          fontWeight: "800",
          textTransform: "uppercase",
          textAlign: "center",
          padding: ".5rem 1rem",
          borderRadius: "25px",
          boxShadow: "0px 10px 57px -10px rgba(0,0,0,0.75)",
        }}
      >
        Parceiros
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          gap: "3rem",
          padding: "0 1rem",
          marginTop: "2rem",
        }}
      >
        <StaticImage
          objectFit="contain"
          src="../../images/intelbras.png"
          alt="Logo da microsoft"
          style={{ maxWidth: "min(250px, 20%)" }}
        />
        <StaticImage
          objectFit="contain"
          src="../../images/microsoft.png"
          style={{ maxWidth: "min(250px, 20%)" }}
          alt="Logo da microsoft"
        />
        <StaticImage
          objectFit="contain"
          src="../../images/bitdefender.png"
          style={{ maxWidth: "min(250px, 20%)" }}
          alt="Logo da bitdefender"
        />
        <StaticImage
          objectFit="contain"
          src="../../images/ipforce.png"
          style={{ maxWidth: "min(250px, 20%)" }}
          alt="Logo da ipforce"
        />
      </div>
    </section>
  );
}
