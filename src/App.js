import "./App.css";
import Header from "./components/Header";
import Herocard from "./components/Herocard";
import Publi from "./components/Publi";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Sos from "./components/Sos";
import Crp from "./components/Crp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center">
      <Header />
      <div className="w-full max-w-[1600px]">
        <Herocard />
        <Publi />
      </div>
      <About />
      <Services />
      <Faq />
      <Contact />
      <Sos />
      <Crp />
      <Footer />
    </div>
  );
}

export default App;
