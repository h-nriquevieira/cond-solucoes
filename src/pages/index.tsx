import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cond Soluções</title>;
