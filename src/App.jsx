import { useRef, useState, useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollY, setScrollY] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="up" className="container">
      <Header
        scrollToSection={scrollToSection}
        refs={{ heroRef, mainRef, contactRef }}
      />
      <section ref={heroRef}>
        <Hero />
      </section>
      <div className="divider" />
      <section ref={mainRef}>
        <Main />
      </section>
      <div className="divider" />
      <section ref={contactRef}>
        <Contact />
      </section>
      <div className="divider" />
      <Footer />
      <a style={{ opacity: scrollY ? 1 : 0, transition: "0.5s" }} href="#up">
        <button className="icon-keyboard_arrow_up scrollTop" />
      </a>
    </div>
  );
}

export default App;
