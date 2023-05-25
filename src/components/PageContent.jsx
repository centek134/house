/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import "../styles/PageContent.css";
export const PageContent = () => {
  
  return (
    <main className="page-wrapper">
      <div className="section-margin"></div>
      <section className="about-me section --left">
          <article className="section__intro-wrapper --pink-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --pink-text">ABOUT ME</span></h2> 
              <div className="intro-wrapper__decoration --style-one --pink-background --pink-border"></div>
              <div className="intro-wrapper__decoration --style-two --pink-border"></div>
              <div className="intro-wrapper__decoration --style-three --pink-border"></div>
              <span className="intro-wrapper__number --pink-text">01</span>
          </article>
          <article className="section__detail-wrapper">
          <p className="detail-wrapper__text">Hello there ✋! I'm a third year computer science student from Poland. I'm currently researching front-end solutions to provide a better web user experience.</p>
          <p className="detail-wrapper__text">In my free time I like to read books 📚 most often I go for genres such as horror, fantasy. Working out is also a big part of my life, allows me to stay healthy and in shape 💪. Other than that I do like to play board games 🎲.</p>
          </article>
      </section>
      <div className="section-margin"></div>
      <section className="my-work section --right">
          <article className="section__intro-wrapper --purple-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --purple-text">WORK & SKILLS</span></h2>
              <div className="intro-wrapper__decoration --style-one --purple-background --purple-border"></div>
              <div className="intro-wrapper__decoration --style-two --purple-border"></div>
              <div className="intro-wrapper__decoration --style-three --purple-border"></div>
              <span className="intro-wrapper__number --purple-text">02</span>
          </article>
          <article className="section__detail-wrapper">
            <div className="detail">
              <h3 className="detail__header">Software skills</h3>
              <ul className="detail__skills-list">
                <li className="list__item">HTML5, CSS3, JavaScript, Typescript, Rest API</li>
                <li className="list__item">React, React Router</li>
                <li className="list__item">Jira, Github, AEM, Blender 3.5</li>
              </ul>
            </div>
            <div className="detail">
              <h3 className="detail__header">Soft skills</h3>
              <ul className="detail__skills-list">
                <li className="list__item">Problem solving abilities</li>
                <li className="list__item">Ability to work under time pressure</li>
                <li className="list__item">Analytical thinking</li>
                <li className="list__item">Ability to work in a gruop</li>
              </ul>
            </div>
            <div className="detail">
            <h3>Commercial Projects:</h3>
              <ul className="detail__work-list">
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s22/" target="__blank">S22</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s22-ultra/" target="__blank">S22 Ultra</a></li>
                <li className="list__item">Samsung Galaxy Z <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-flip4/" target="__blank">Flip4</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-fold4/" target="__blank">Fold4</a></li>
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s23/" target="__blank">S23</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s23-ultra/" target="__blank">S23 Ultra</a></li>
              </ul>
            </div>

            <p className="detail-wrapper__text"></p>
          </article>
      </section>
      <div className="section-margin"></div>
      <section className="contact-me section --left">
          <article className="section__intro-wrapper --green-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --green-text">CONTACT ME</span></h2>
              <div className="intro-wrapper__decoration --style-one --green-background --green-border"></div>
              <div className="intro-wrapper__decoration --style-two --green-border"></div>
              <div className="intro-wrapper__decoration --style-three --green-border"></div>
              <span className="intro-wrapper__number --green-text">03</span>
          </article>
          <article className="section__detail-wrapper">
          <div className="detail">
              <h3 className="detail__header">Don't be shy, reach me  </h3>
              <ul className="detail__contact-list">
                <li className="list__item">via <a className="item__link" href="https://www.linkedin.com/in/tomasz-osuch-1865811a4/" target="__blank">Linkedin</a></li>
                <li className="list__item">if you like writing emails <a className="item__link" href="mailto:nowhere@mozilla.org"><span>Mail me</span></a> then</li>
              </ul>
            </div>
          </article>
      </section>
    </main>
  );
};
