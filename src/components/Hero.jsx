import "../styles/Hero.css";
import ArrowDown from "../assets/arrow-down.svg"
export const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__first">
            <h1 className="first__name">Tomasz Osuch</h1>
            <p className="first__title">Frontend Developer | IT Student</p>
        </div>
        <div className="hero__second">
          <p className="second__title">TOMASZOSUCH PORTFOLIO</p>
        </div>
        <img className="hero__arrow" src={ArrowDown}/>
    </section>
  );
};
