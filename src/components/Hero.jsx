import { useEffect, useState } from "react";
import { styles } from "../styles";
import Me from "../assets/me.png";
import "../styles.css";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full lg:h-screen h-auto py-12">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex lg:flex-row flex-col items-center text-center justify-center gap-20`}
      >
        <div
          className={`transform transition-all ${
            isMounted ? "animate-slide-in-left" : ""
          }`}
          id="about"
        >
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm Ali Rehman</h1>
          <p className={`mt-3 mx-auto ${styles.heroSubText} text-gray-500`}>
            <span className="text-[#102327]">~</span> Passionate Web Developer{" "}
            <span className="text-[#102327]">|</span> MERN Stack{" "}
            <span className="text-[#102327]">~</span>
          </p>
        </div>
        <div
          className={`bg-[#102327] lg:mt-14 justify-center rounded-full overflow-hidden transform transition-all ${
            isMounted ? "animate-slide-in-right" : ""
          }`}
        >
          <img src={Me} alt="" className="w-full h-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
