import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import MyLinks from "./components/MyLinks";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-denter">
          <Navbar />
          <Hero />
        </div>

        {/* Overview */}
        <About />

        {/* Work Experience */}
        {/* <Experience /> */}

        {/* Technologies Known */}
        <Tech />

        {/* Projects */}
        <Works />

        {/* Testimonials */}
        {/* <Feedbacks /> */}

        <MyLinks />

        <div className="relative z-0">
          {/* Contact Me */}
          <Contact />

          {/* Floating Stars Canvas around the 3d Earth Model*/}
          <StarsCanvas />
        </div>

        {/* Toast Container */}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          limit={1}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
