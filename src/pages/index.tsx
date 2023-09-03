import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/main.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OfferedServices from "../components/OfferedServices/OfferedServices";
import AboutUs from "../components/AboutUs/AboutUs";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Hero />
      <OfferedServices />
      <AboutUs />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cond Soluções</title>;
