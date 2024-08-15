import { useEffect, useState } from "react";
import { styles } from "../styles";
import Me from "../assets/image.png";
import "../styles.css";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full lg:h-screen h-auto py-12 border-b-2 border-[#f2004a]">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex lg:flex-row flex-col items-center text-center justify-center gap-20`}
      >
        <div
          className={`transform transition-all ${
            isMounted ? "animate-slide-in-left" : ""
          } mt-10`}
          id="about"
        >
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm Ali Rehman</h1>
          <p className={`mt-3 mx-auto ${styles.heroSubText} text-[#efefef]`}>
            <span>~</span> Passionate Web Developer <span>|</span> MERN Stack{" "}
            <span>~</span>
          </p>
        </div>
        <div
          className={`bg-[#f2004a] lg:mt-14 rounded-full overflow-hidden h-auto transform transition-all ${
            isMounted ? "animate-slide-in-right" : ""
          }`}
        >
          <img src={Me} alt="Ali Rehman" className="w-full h-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
