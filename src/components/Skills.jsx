import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import "../styles.css";

const Skills = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="w-full h-auto lg:h-screen border-b-2 border-[#f2004a]"
    >
      <div
        className={`transform transition-all py-3 ${
          isIntersecting ? "animate-slide-in-left" : ""
        }`}
        id="skills"
      >
        <h1 className={`${styles.heroHeadText} text-center`}>Skills</h1>
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10`}
      >
        {technologies.map((tech, index) => (
          <div
            className={`w-24 h-24 flex flex-col mb-6 ${
              isIntersecting ? "animate-slide-in-right" : ""
            }`}
            key={index}
          >
            <p className="text-center font-bold text-[#efefef]">{tech.name}</p>
            <img src={tech.icon} alt={tech.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
