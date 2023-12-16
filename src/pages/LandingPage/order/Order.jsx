import Layout from "@/components/Layout";
import Cart from "@/components/order/Cart";
import CompanyProfile from "@/components/order/CompanyProfile";

function Order() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNextStep = () =>
    startTransition(() => {
      setCurrentStep(currentStep + 1);
    });

  const handlePrevStep = () => setCurrentStep(currentStep - 1);
  return (
    <Layout>
      {currentStep === 0 && <Cart onNext={handleNextStep} />}
      {currentStep === 1 && (
        <CompanyProfile onNext={handleNextStep} onPrev={handlePrevStep} />
      )}
      {currentStep === 2 && (
        <UserProfile onNext={handleNextStep} onPrev={handlePrevStep} />
      )}
      {currentStep === 3 && <Checkout onPrev={handlePrevStep} />}
    </Layout>
  );
}

export default Order;
