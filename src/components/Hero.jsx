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
        <div className="hero__intro">
          <p className="intro__title">
            <span className="title__item">W</span>
            <span className="title__item">e</span>
            <span className="title__item">l</span>
            <span className="title__item">c</span>
            <span className="title__item">o</span>
            <span className="title__item">m</span>
            <span className="title__item">e</span>
            <span className="title__item"> </span>
            <span className="title__item">t</span>
            <span className="title__item">o</span>
            <span className="title__item"> </span>
            <span className="title__item">m</span>
            <span className="title__item">y</span>
            <span className="title__item"> </span>
            <span className="title__item">p</span>
            <span className="title__item">o</span>
            <span className="title__item">r</span>
            <span className="title__item">t</span>
            <span className="title__item">f</span>
            <span className="title__item">o</span>
            <span className="title__item">l</span>
            <span className="title__item">i</span>
            <span className="title__item">o</span>
            <span className="title__item">!</span>
          </p>
        </div>
        <img className="hero__arrow" src={ArrowDown}/>
    </section>
  );
};
