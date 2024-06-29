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
    <section ref={ref} className="w-full h-auto lg:h-screen bg-[#102327]">
      <div
        className={`transform transition-all py-3 ${
          isIntersecting ? "animate-slide-in-left" : ""
        }`}
        id="skills"
      >
        <h1 className={`${styles.heroHeadText} text-[#efefef] text-center`}>
          Skills
        </h1>
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} flex flex-row flex-wrap justify-center gap-10`}
      >
        {technologies.map((tech, index) => (
          <div
            className={`w-28 h-28 flex flex-col justify-center items-center ${
              isIntersecting ? "animate-slide-in-right" : ""
            }`}
            key={index}
          >
            <p className="text-center font-bold text-gray-500">{tech.name}</p>
            <img src={tech.icon} alt={tech.name} className="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
