// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import React from "react";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import Roberto from "../ClientCard/Roberto";
import Luana from "../ClientCard/Luana";

export default function ClientsSection() {
  const breakpoints = useBreakpoint();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const scrollRef = useHorizontalScroll();

  return (
    <section
      style={{
        backgroundColor: "var(--clr-light-bg)",
        padding: "2rem 0 6rem",
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
        Clientes
      </h2>
      <p
        style={{
          fontWeight: "800",
          textAlign: "center",
          color: "var(--clr-primary)",
          fontSize: breakpoints.sm ? "1.25rem" : "2.375rem",
          padding: "0 2rem",
        }}
      >
        O QUE NOSSOS CLIENTES FALAM DE NÓS
      </p>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "6rem",
          maxWidth: "100%",
          overflow: "scroll",
          justifyContent: "start",
          alignItems: "start",
          padding: breakpoints.sm ? "2rem 1rem 6rem" : "2rem 5rem 6rem",
        }}
      >
        <Luana />
        <Roberto />
      </div>
    </section>
  );
}
