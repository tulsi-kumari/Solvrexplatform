import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhoWeServe } from "./components/WhoWeServe";
import { WhySolvrex } from "./components/WhySolvrex";
import { HowWeWork } from "./components/HowWeWork";
import { ComingSoon } from "./components/ComingSoon";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhoWeServe />
      <WhySolvrex />
      <HowWeWork />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}
