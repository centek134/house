
import "../styles/AboutMe.css";
export const AboutMe = () => {
  return (
    <section className="section">
        <article className="section__intro-wrapper">
            <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text">ABOUT ME</span></h2>
            <div className="intro-wrapper__decoration"></div>
            <div className="intro-wrapper__decoration"></div>
            <div className="intro-wrapper__decoration"></div>
            <span className="intro-wrapper__number">01</span>
        </article>
        <article className="section__detail-wrapper">
          <p className="detail-wrapper__text">What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
    </section>
  );
};
