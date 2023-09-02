import { useSpring } from "@react-spring/web";
import * as React from "react";

type MobileSidebarMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function MobileSidebarMenu({
  isOpen,
  toggleMenu,
}: MobileSidebarMenuProps) {
  return (
    <>
      <div
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          position: "fixed",
          top: "0",
          right: "0",
          minHeight: "100vh",
          zIndex: "2",
          backgroundColor: "#fff",
          padding: "1rem 1rem",
          minWidth: "min(350px, 50%)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          style={{
            maxWidth: "25px",
            maxHeight: "25px",
            alignSelf: "end",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        >
          <g
            fill="#13314d"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
            </g>
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <a style={{ fontSize: "1.25rem" }}>Serviços</a>
          <button
            style={{
              fontSize: "1.25rem",
              color: "var(--clr-white)",
              background: "var(--brand-gradient)",
              padding: ".5rem 1rem",
              borderRadius: "25px",
            }}
          >
            Contato
          </button>
        </div>
      </div>
      <div
        style={{
          display: isOpen ? "initial" : "none",
          position: "absolute",
          top: "0",
          zIndex: "1",
          minWidth: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "black",
          opacity: ".2",
        }}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
