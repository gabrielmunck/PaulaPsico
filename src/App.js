import "./App.css";
import Herocard from "./components/Herocard";
import Publi from "./components/Publi";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center">
      <div className="w-full max-w-[1600px]">
        <Herocard />
        <Publi />
      </div>
      <About />
      <Services />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
