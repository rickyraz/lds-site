import Layout from "@/components/Layout";
import Hero from "@/components/landingpage/Hero";

import ChooseUs from "@/components/landingpage/ChooseUs";
import Feature from "@/components/landingpage/Feature";
import Interest from "@/components/landingpage/Interest";
import Static from "@/components/landingpage/Static";
import CoverageArea from "@/components/landingpage/CoverageArea";
import Price from "@/components/landingpage/Price";

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <CoverageArea />
      <Static />
      <Price />
      {/* <Feature /> */}
      {/* <ChooseUs /> */}
      {/* <Interest /> */}
    </Layout>
  );
}
