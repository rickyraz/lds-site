import Layout from "@/components/Layout";
import Pricing from "@/components/pricing/Pricing";
import PricingDetail from "@/components/pricing/PricingDetail";
import React from "react";

function PricingPage() {
	return (
		<Layout>
			<Pricing />
			<PricingDetail />
		</Layout>
	);
}

export default PricingPage;
