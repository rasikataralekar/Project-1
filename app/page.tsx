import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PressBar from "@/components/sections/PressBar";
import WhyAuro from "@/components/sections/WhyAuro";
import ProductDetail from "@/components/sections/ProductDetail";
import Reviews from "@/components/sections/Reviews";
import Ingredients from "@/components/sections/Ingredients";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PressBar />
        <WhyAuro />
        <ProductDetail />
        <Reviews />
        <Ingredients />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
