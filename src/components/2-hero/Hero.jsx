import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/animation/dev.json";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };
  const lottieRef = useRef(null);
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt="Photo of Nasser Souidi"
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Hi, I'm Nasser — Full-Stack JavaScript Developer focused on React &
          Node.js
        </motion.h1>
        <p className="sub-title">
          I’m Nasser Souidi, a Full-Stack JavaScript Engineer and ENET'Com
          graduate, specialized in React, Node.js, TypeScript, and JavaScript. I
          build fast, scalable, and secure web solutions that address real-world
          challenges with clarity and efficiency.
        </p>
        <div className="all-icons flex">
          <div
            className=" icon icon-facebook"
            onClick={() =>
              handleLinkClick("https://www.facebook.com/SOUIDINNasser")
            }
          />
          <div
            className="icon icon-instagram"
            onClick={() =>
              handleLinkClick("https://www.instagram.com/souidinasser/?__pwa=1")
            }
          />
          <div
            className="icon icon-github"
            onClick={() => handleLinkClick("https://github.com/nasser-souidi")}
          />
          <div
            className="icon icon-linkedin"
            onClick={() =>
              handleLinkClick("https://www.linkedin.com/in/nasser-souidi/")
            }
          />
          <div
            className="icon icon-profile"
            onClick={() => handleLinkClick("./cv.pdf")}
          />
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          // @ts-ignore
          // https://lottiereact.com/
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
