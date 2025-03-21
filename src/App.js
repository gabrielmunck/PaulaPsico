import "./App.css";
import Herocard from "./components/Herocard";
import Publi from "./components/Publi";

function App() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center">
      <Herocard />
      <Publi />
    </div>
  );
}

export default App;
