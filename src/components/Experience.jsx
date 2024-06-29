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
    <section ref={ref} className="w-full h-auto bg-[#EFEFEF]">
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
        className={`${styles.paddingX} ${styles.paddingY} rounded-lg flex flex-col sm:flex-row justify-between gap-6 mx-10`}
      >
        <div
          className={`bg-[#102327] text-white p-6 gap-4 rounded-lg sm:w-[40%] w-full ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] font-bold">Final Year Project</span>
          <h3 className="text-[15px] text-gray-200 mb-2">
            Vibely Social Media Website
          </h3>
          <p className="text-white text-[13px]">
            My FYP involved the creation of a dynamic Social Media Website using
            the MERN stack (MongoDB, Express.js, React, Node.js). In this
            project, I assumed a role, encompassing database design, server-side
            logic, and front-end development. Responsibilities included user
            authentication, data storage, and ensuring a responsive and
            user-friendly interface
          </p>
          <button
            type="button"
            className="border-[2px] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
                text-white hover:bg-[#efefef] hover:text-[#102327] font-bold shadow-md shadow-primary"
            onClick={() =>
              window.open("https://github.com/ali-shykh/vibely", "_blank")
            }
          >
            Source Code
          </button>
        </div>

        <div
          className={`bg-[#102327] text-white p-6 gap-4 rounded-lg sm:w-[40%] w-full ${
            isIntersecting ? "animate-slide-in-left" : ""
          }`}
        >
          <span className="text-[30px] font-bold">Semester Project</span>
          <h3 className="text-[15px] text-gray-200 mb-2">
            Movies Recommender System
          </h3>
          <p className="text-white text-[13px]">
            The Movies Recommender System was a semester project aimed at
            leveraging data-driven approaches to provide personalized movie
            recommendations. I took a lead role in designing and implementing
            the recommendation algorithms, ensuring accuracy and relevance in
            movie suggestions for the users.
          </p>

          <button
            type="button"
            className="border-[2px] mt-5 py-3 px-8 rounded-xl w-full outline-none transition-all
             text-white hover:bg-[#efefef] hover:text-[#102327] font-bold shadow-md shadow-primary"
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
      </div>
    </section>
  );
};

export default Experience;
