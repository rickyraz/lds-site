import Layout from "@/components/Layout";
import Hero from "@/components/landingpage/Hero";

import Interest from "@/components/landingpage/Interest";
import Static from "@/components/landingpage/Static";
import CoverageArea from "@/components/landingpage/CoverageArea";
import Price from "@/components/landingpage/Price";
import About from "@/components/landingpage/About";
import FAQ from "@/components/landingpage/FAQ";

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <CoverageArea />
      <Static />
      <Price />
      <About />
      <FAQ />
    </Layout>
  );
}
