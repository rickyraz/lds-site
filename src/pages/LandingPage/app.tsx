import Layout from "@/components/Layout";
import Hero from "@/components/landingpage/Hero";

import Interest from "@/components/landingpage/Interest";
import Static from "@/components/landingpage/Static";
import CoverageArea from "@/components/landingpage/CoverageArea";
import Price from "@/components/landingpage/Price";
import About from "@/components/landingpage/About";
import FAQ from "@/components/landingpage/FAQ";

import Loader from "@/components/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductPublic } from "@/components/order/config_public";
import { filter } from "lodash";

export default function Landing() {
  const {
    isLoading,
    error,
    data: publicProduct,
    isSuccess,
  } = useQuery({
    queryKey: ["publicProduct"],
    queryFn: () => getProductPublic(),
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  const dataProduct = publicProduct?.data?.product_param_data || [];
  const targetIds = [39, 42, 43];
  const filteredData = filter(dataProduct, (obj) => {
    return targetIds.includes(obj.id);
  });

  console.log("dataProduct", dataProduct);
  console.log("publicProduct", publicProduct);
  console.log("filteredData", filteredData);
  return (
    <Layout>
      <Hero />
      {/* <CoverageArea /> */}
      <Static />
      <Price data={filteredData} />
      <About />
      <FAQ />
    </Layout>
  );
}
