/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import "../styles/PageContent.css";
export const PageContent = () => {
  
  return (
    <main className="page-wrapper">
      <div className="section-margin --first"></div>
      <section className="about-me section --left">
          <div className="progress-bar-wrapper --scroll-left">
            <div className="progress-bar --pink-scroll"></div>
          </div>
          <article className="section__intro-wrapper --pink-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --pink-text">ABOUT ME</span></h2> 
              <div className="intro-wrapper__decoration --style-one --pink-background --pink-border"></div>
              <div className="intro-wrapper__decoration --style-two --pink-border"></div>
              <div className="intro-wrapper__decoration --style-three --pink-border"></div>
              <span className="intro-wrapper__number --pink-text">01</span>
          </article>
          <article className="section__detail-wrapper">
          <p className="detail-wrapper__text">Hello there ✋! I'm an frontend developer from Poland. I'm currently researching front-end solutions to provide a better web user experience.</p>
          <p className="detail-wrapper__text">In my free time I like to read books 📚 most often I go for genres such as horror, fantasy. Working out is also a big part of my life, allows me to stay healthy and in shape 💪. Other than that I do like to play board games 🎲.</p>
          </article>
      </section>
      <div className="section-margin --second"></div>
      <section className="my-work section --right">
          <div className="progress-bar-wrapper --scroll-right">
            <div className="progress-bar --purple-scroll"></div>
          </div>
          <article className="section__intro-wrapper --purple-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --purple-text">WORK & SKILLS</span></h2>
              <div className="intro-wrapper__decoration --style-one --purple-background --purple-border"></div>
              <div className="intro-wrapper__decoration --style-two --purple-border"></div>
              <div className="intro-wrapper__decoration --style-three --purple-border"></div>
              <span className="intro-wrapper__number --purple-text">02</span>
          </article>
          <article className="section__detail-wrapper">
            <div className="detail">
              <h3 className="detail__header">Software skills:</h3>
              <ul className="detail__skills-list">
                <li className="list__item">React, JavaScript ES6+, TypeScript, REST API</li>
                <li className="list__item">React Three Drei, React, Three Fiber, Three.js, GSAP</li>
                <li className="list__item">Blender 3.5, Photoshop, Figma</li>
                <li className="list__item">HTML5, CSS3, SASS, BEM, RWD</li>
                <li className="list__item">Webpack, Npm, Github</li>
                <li className="list__item">Adobe Experience Manager (AEM)</li>
                <li className="list__item">Working with: Confluence, JIRA, Slack, Agile: Scrum</li>
              </ul>
            </div>
            <div className="detail">
              <h3 className="detail__header">Soft skills:</h3>
              <ul className="detail__skills-list">
                <li className="list__item">Problem solving abilities</li>
                <li className="list__item">Ability to work under time pressure</li>
                <li className="list__item">Analytical thinking</li>
                <li className="list__item">Willingness to learn</li>
                <li className="list__item">Ability to work in a group</li>
              </ul>
            </div>
            <div className="detail">
            <h3>Commercial Projects:</h3>
              <ul className="detail__work-list">
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s22/" target="__blank" title="Link to samsung galaxy s22 website">S22</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s22-ultra/" target="__blank" title="Link to samsung galaxy s22 ultra website">S22 Ultra</a></li>
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-flip4/" target="__blank" title="Link to samsung z flip4 website">Z Flip4</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-fold4/" target="__blank" title="Link to samsung z flip4 website">Z Fold4</a></li>
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s23/" target="__blank" title="Link to samsung galaxy s23 website">S23</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s23-ultra/" target="__blank" title="Link to samsung galaxy s23 website">S23 Ultra</a></li>
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-flip5/" target="__blank" title="Link to samsung z flip5 website">Z Flip5</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-z-fold5/" target="__blank" title="Link to samsung z flip5 website">Z Fold5</a></li>
                <li className="list__item">Samsung Galaxy <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s24/" target="__blank" title="Link to samsung s24 & s24+ website">S24</a> & <a className="item__link" href="https://www.samsung.com/uk/smartphones/galaxy-s24-ultra/" target="__blank" title="Link to samsung s24 ultra website">S24 Ultra</a></li>
              </ul>
              <small>

              <ul className="detail__role-list">
                <h4>My role during the projects:</h4>
                <li >Preparation and onboarding of tools necessary for the project take-off.</li>
                <li >Creation and localization of websites for specific European markets under the HQ (Korean) guidelines.</li>
                <li >Solving complex technical problems occurring during production.</li>
              </ul>
              </small>
            </div>
            <div className="detail">
              <h3 className="detail__header">Would you like to see more? Check my <a title="Link to Tomasz github profile" className="header__link" href="https://github.com/centek134" target="__blank">github</a>.</h3>
            </div>
          </article>
      </section>
      <div className="section-margin --third"></div>
      <section className="contact-me section --left">
          <div className="progress-bar-wrapper --scroll-left">
            <div className="progress-bar --green-scroll"></div>
          </div>
          <article className="section__intro-wrapper --green-border">
              <h2 className="intro-wrapper__title"><span className="intro-wrapper__title__text --green-text">CONTACT ME</span></h2>
              <div className="intro-wrapper__decoration --style-one --green-background --green-border"></div>
              <div className="intro-wrapper__decoration --style-two --green-border"></div>
              <div className="intro-wrapper__decoration --style-three --green-border"></div>
              <span className="intro-wrapper__number --green-text">03</span>
          </article>
          <article className="section__detail-wrapper">
          <div className="detail">
              <h3 className="detail__header">Don't be shy</h3>
              <ul className="detail__contact-list">
                {/* <li className="list__item">reach me out by <a className="item__link" href="https://www.linkedin.com/in/tomasz-osuch-1865811a4/" target="__blank" title="Link to Tomasz linkedin">Linkedin</a>.</li> */}
                <li className="list__item">Send me an <a className="item__link" href="mailto:tomaszosuch124@wp.pl" title="Send an email to Tomasz"><span>email</span></a>.</li>
              </ul>
            </div>
          </article>
      </section>
    </main>
  );
};
