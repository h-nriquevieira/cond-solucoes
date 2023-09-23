import { useBreakpoint } from "gatsby-plugin-breakpoints";
import React from "react";
import Seguranca from "../ServiceItem/Seguranca";
import TI from "../ServiceItem/TI";
import Papelaria from "../ServiceItem/Papelaria";
import Limpeza from "../ServiceItem/Limpeza";
import Descartaveis from "../ServiceItem/Descartaveis";

export default function OfferedServices() {
  const breakpoints = useBreakpoint();

  return (
    <section
      id="servicos"
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
        Serviços
      </h2>
      <p
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "800",
          fontSize: breakpoints.sm ? "1.7rem" : "2.375rem",
        }}
      >
        Oferecemos as soluções ideais
      </p>
      <p
        style={{
          color: "var(--clr-darker-gray)",
          fontSize: breakpoints.small ? ".875rem" : "1.25rem",
          fontWeight: "300",
          textAlign: "center",
          maxWidth: "580px",
        }}
      >
        {breakpoints.sm ? "Toque" : "Passe o mouse"} para ver mais sobre cada
        área de serviço que podemos te ajudar!
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <TI />
        <Seguranca />
        <Papelaria />
        <Limpeza />
        <Descartaveis />
      </div>
    </section>
  );
}
