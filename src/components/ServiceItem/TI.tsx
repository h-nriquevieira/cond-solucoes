import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import "./auxCss.css";

export default function TI() {
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
          <StaticImage src="../../images/service-icon-ti.png" alt="TI" />
          <p
            style={{
              color: "var(--clr-black)",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            T.I.
          </p>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content side="bottom" avoidCollisions>
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
            {/* <StaticImage
              src=""
              alt=""
              style={{ backgroundColor: "black", minWidth: "50%" }}
            /> */}
            <div
              style={{
                width: "50%",
                backgroundColor: "black",
                borderTopLeftRadius: "45px",
                borderBottomLeftRadius: "45px",
              }}
            ></div>
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
                T.I.
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                  letterSpacing: ".095em",
                  lineHeight: "125%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mattis lacinia sapien, non tincidunt tortor lobortis ac. Nunc
                cursus tortor sed eros pharetra tristique. Ut accumsan leo quis
                justo posuere, ut auctor lectus rhoncus. Phasellus et nisl
                fringilla, porta nibh quis, pharetra libero. Donec blandit magna
                egestas elementum blandit.
              </p>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
