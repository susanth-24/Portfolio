import { BrowserRouter } from "react-router-dom";
import { About, Projects,Me, Navbar, StarsCanvas,Expert,Email,Down} from "./components";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Contact from "./components/Email";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-[#050816] bg-cover bg-no-repeat bg-center">
          <Navbar />
          
          <div className="relative z-0">
            <StarsCanvas/>
            <Me />
          </div>
          <About />
          <div className="mt-20">
          <Projects />
          </div>
          <Expert />
          <Email />
          <Down />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
