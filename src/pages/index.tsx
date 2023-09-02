import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/reset.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 style={{ fontFamily: "Montserrat" }}>Cond Soluções</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cond Soluções</title>;
