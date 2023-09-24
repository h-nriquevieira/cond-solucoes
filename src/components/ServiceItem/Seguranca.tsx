import "./auxCss.css";
import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function Seguranca() {
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
            src="../../images/service-icon-seguranca.png"
            alt="Segurança"
          />
          <p
            style={{
              color: "var(--clr-black)",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            Segurança
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
              src="../../images/security.jpg"
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
                }}
              >
                Segurança
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                }}
              >
                Trabalhamos com os mais sofisticados sistemas de segurança,
                visando trazer conforto e tranquilidade para quem precisa.
              </p>
              <ul
                style={{
                  listStyle: "disc inside",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginTop: ".5rem",
                }}
              >
                <li>
                  Venda de sistemas eletrônicos de segurança, alarmes, câmeras,
                  hds, cerca, sensores, dvrs e mais;
                </li>
                <li>
                  Serviço em sistemas eletrônicos de segurança (Alarme, Câmera,
                  Cerca Elétrica, etc).
                </li>
              </ul>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
