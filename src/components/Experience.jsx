import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import "../styles.css";

export const Experience = () => {
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
    <section ref={ref} className="border-b-2 border-[#f2004a]">
      <div className={`pt-3`} id="experience">
        <h1
          className={`${
            styles.heroHeadText
          } text-[#102327] text-center transform transition-all ${
            isIntersecting ? "animate-slide-in-right" : ""
          }`}
        >
          Experience
        </h1>
      </div>

      <div
        className={`${styles.paddingX} ${styles.paddingY} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        <div
          className={`bg-transparent p-6 gap-4 rounded-lg w-full border-2 border-[#f2004a] ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] text-[#f2004a] font-extrabold">
            VIBELY
          </span>
          <h3 className="text-[15px] text-[#efefef] mb-2">
            Social Media Website
          </h3>
          {/* <p className="text-white text-[13px]">
            My FYP involved the creation of a dynamic Social Media Website using
            the MERN stack (MongoDB, Express.js, React, Node.js). In this
            project, I assumed a role, encompassing database design, server-side
            logic, and front-end development. Responsibilities included user
            authentication, data storage, and ensuring a responsive and
            user-friendly interface
          </p> */}
          <button
            type="button"
            className="border-2 border-[#f2004a] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
                text-[#efefef] hover:text-[#f2004a] font-bold shadow-md shadow-primary"
            onClick={() =>
              window.open("https://github.com/ali-shykh/vibely", "_blank")
            }
          >
            Source Code
          </button>
        </div>

        <div
          className={`bg-transparent p-6 gap-4 rounded-lg w-full border-2 border-[#f2004a] ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] text-[#f2004a] font-extrabold">
            FILM FINDER
          </span>
          <h3 className="text-[15px] text-[#efefef] mb-2">
            Movies Recommendation System
          </h3>
          {/* <p className="text-white text-[13px]">
            The Movies Recommender System was a semester project aimed at
            leveraging data-driven approaches to provide personalized movie
            recommendations. I took a lead role in designing and implementing
            the recommendation algorithms, ensuring accuracy and relevance in
            movie suggestions for the users.
          </p> */}

          <button
            type="button"
            className="border-2 border-[#f2004a] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
             text-[#efefef] hover:text-[#f2004a] font-bold shadow-md shadow-primary"
            onClick={() =>
              window.open(
                "https://github.com/ali-shykh/movies-recommender-system",
                "_blank"
              )
            }
          >
            Source Code
          </button>
        </div>

        <div
          className={`bg-transparent p-6 gap-4 rounded-lg w-full border-2 border-[#f2004a] ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] text-[#f2004a] font-extrabold">
            ZEN MIND
          </span>
          <h3 className="text-[15px] text-[#efefef] mb-2">
            Focus Time Application
          </h3>
          {/* <p className="text-white text-[13px]">
            The Movies Recommender System was a semester project aimed at
            leveraging data-driven approaches to provide personalized movie
            recommendations. I took a lead role in designing and implementing
            the recommendation algorithms, ensuring accuracy and relevance in
            movie suggestions for the users.
          </p> */}

          <button
            type="button"
            className="border-2 border-[#f2004a] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
             text-[#efefef] hover:text-[#f2004a] font-bold shadow-md shadow-primary"
            onClick={() =>
              window.open("https://github.com/ali-shykh/ZenMind", "_blank")
            }
          >
            Source Code
          </button>
        </div>

        <div
          className={`bg-transparent p-6 gap-4 rounded-lg w-full border-2 border-[#f2004a] ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] text-[#f2004a] font-extrabold">
            MEAL FEEL
          </span>
          <h3 className="text-[15px] text-[#efefef] mb-2">
            Food Ordering Application
          </h3>
          {/* <p className="text-white text-[13px]">
            The Movies Recommender System was a semester project aimed at
            leveraging data-driven approaches to provide personalized movie
            recommendations. I took a lead role in designing and implementing
            the recommendation algorithms, ensuring accuracy and relevance in
            movie suggestions for the users.
          </p> */}

          <button
            type="button"
            className="border-2 border-[#f2004a] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
             text-[#efefef] hover:text-[#f2004a] font-bold shadow-md shadow-primary"
            onClick={() =>
              window.open("https://github.com/ali-shykh/MealFeel", "_blank")
            }
          >
            Source Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
