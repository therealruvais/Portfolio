
import { Contact, Hero, Work, Who } from "./Components/index";
import "./App.css";

const App = () => {
  
  return (
    <>
      <div className="app-container ">
        <Hero />
        <Who />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default App;
