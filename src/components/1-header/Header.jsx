import { useEffect, useState } from "react";
import "./header.css";

const Header = ({ scrollToSection, refs }) => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const handleScrollAndClose = (ref) => {
    scrollToSection(ref);
    setShowModel(false);
  };

  return (
    <header className="header-container flex">
      <div className="left">
        <button
          className="menu icon-menu flex"
          onClick={() => setShowModel(true)}
        />
      </div>

      <div className="flex">
        <nav>
          <ul className="flex">
            <li>
              <button onClick={() => scrollToSection(refs.heroRef)}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.mainRef)}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.contactRef)}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right">
        <button
          className="mode"
          onClick={() => {
            const newTheme = theme === "dark" ? "light" : "dark";
            localStorage.setItem("currentMode", newTheme);
            setTheme(newTheme);
          }}
        >
          {theme === "dark" ? (
            <span className="icon-moon" />
          ) : (
            <span className="icon-sun" />
          )}
        </button>
      </div>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-cross"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <button onClick={() => handleScrollAndClose(refs.heroRef)}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollAndClose(refs.mainRef)}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollAndClose(refs.contactRef)}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
