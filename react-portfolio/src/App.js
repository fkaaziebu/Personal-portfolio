import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from 'react';
// import { useLocation } from "react-router-dom";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-deep-blue">
      {/* <ScrollToTop /> */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
      <div className="w-5/6 mx-auto">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
