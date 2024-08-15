import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds before stopping the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts or loading state changes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <div className="bg-[#1f1f1f]">
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
