import React from "react";
import { styles } from "../styles";
import { Heart } from "lucide-react"; // Ensure you're importing from the correct package

const Footer = () => {
  return (
    <section
      className={`${styles.paddingX} flex justify-center py-6 border-b-2 border-[#f2004a]`}
    >
      <h1 className="text-[#efefef] text-2xl font-bold">
        Made with{" "}
        <span>
          <Heart color="#f2004a" className="inline-block" fill="#f2004a" />
        </span>{" "}
        By Ali Rehman!
      </h1>
    </section>
  );
};

export default Footer;
