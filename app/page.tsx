import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceMap from "./components/ServiceMap";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceMap />
      <ProblemSolution />
      <Services />
      <Process />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
