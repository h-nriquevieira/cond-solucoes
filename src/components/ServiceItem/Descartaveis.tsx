import "./auxCss.css";
import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function Descartaveis() {
  const [open, setOpen] = React.useState(false);
  const breakpoints = useBreakpoint();

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <HoverCard.Root open={open} onOpenChange={toggleOpen}>
      <HoverCard.Trigger>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
          onClick={toggleOpen}
        >
          <StaticImage
            src="../../images/service-icon-descartaveis.png"
            alt="Descartaveis"
          />
          <p
            style={{
              color: "var(--clr-black)",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            Descartáveis
          </p>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content side="bottom" sideOffset={10} avoidCollisions>
          <div
            style={{
              display: "flex",
              width: "min(520px, 95vw)",
              minHeight: "300px",
              maxHeight: "50vh",
              background: "var(--brand-gradient)",
              padding: ".5rem",
              borderRadius: "50px",
            }}
          >
            <StaticImage
              src="../../images/disposable-plastic-tableware.jpg"
              alt=""
              style={{
                width: "50%",
                borderTopLeftRadius: "45px",
                borderBottomLeftRadius: "45px",
              }}
            />
            <div
              style={{
                width: "50%",
                padding: "2rem 1rem",
                backgroundColor: "var(--clr-white)",
                borderTopRightRadius: "45px",
                borderBottomRightRadius: "45px",
                overflowY: "scroll",
                fontFamily: "Montserrat, sans-serif",
              }}
              className="description"
            >
              <h3
                style={{
                  fontSize: "1.37rem",
                  textTransform: "uppercase",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Descartáveis
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                }}
              >
                Itens descartáveis para eventos, portarias e demais serviços
                necessários. Aqui você encontra uma linha completa de produtos
                para sua necessidade, desde copos até mesmo talheres e
                guardanapos.
              </p>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
