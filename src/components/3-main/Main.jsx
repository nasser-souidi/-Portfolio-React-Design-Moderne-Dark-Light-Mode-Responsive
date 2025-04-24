import "./main.css";
import { useState } from "react";
import { MyProjects } from "./MyProjects";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(MyProjects);
  const handleClick = (catogoryButton) => {
    if (catogoryButton === "all") {
      setArr(MyProjects);
    } else {
      const newArray = MyProjects.filter((item) =>
        item.category.includes(catogoryButton)
      );
      setArr(newArray);
    }
    setCurrentActive(catogoryButton);
  };
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <main className="flex">
      <section className="left-section  flex ">
        {/* button 1 */}
        <button
          onClick={() => handleClick("all")}
          className={currentActive == "all" ? "active" : ""}
        >
          all Projects
        </button>

        {/* button 2 */}
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          HTML & CSS
        </button>
        {/* button 3 */}
        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        {/* button 4 */}
        <button
          onClick={() => handleClick("react.js")}
          className={currentActive == "react.js" ? "active" : ""}
        >
          React & MUI
        </button>
        {/* button 5 */}
        <button
          onClick={() => handleClick("node.js")}
          className={currentActive == "node.js" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.id}
                className="card "
              >
                <img src={item.imgPath} alt="image project " />
                <div
                  style={{ width: "266px"}}
                  className="box"
                >
                  <h1 className="title"> {item.projectTitle}</h1>
                  <p className="sub-title">{item.paragraph}</p>
                  <div className=" flex icons">
                    <div style={{ gap: "11px" }} className=" flex">
                      <div
                        className="icon-link"
                        onClick={() => handleLinkClick(item.link)}
                      ></div>
                      <div
                        className="icon-github"
                        onClick={() => handleLinkClick(item.linkGithub)}
                      ></div>
                    </div>

                    <a href="" className="link flex  icons">
                      <span onClick={() => handleLinkClick(item.linkGithub)}>
                        more
                      </span>
                      <span
                        onClick={() => handleLinkClick(item.linkGithub)}
                        style={{ alignSelf: "center" }}
                        className="icon-arrow-right "
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;