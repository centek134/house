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
          <p className="detail-wrapper__text">Hi ✋! I'm a third year computer science student from Poland. I'm currently researching front-end solutions to provide a better web user experience.</p>
          <p className="detail-wrapper__text">In my free time I'd like to read books 📚 especially fantasy genre, work out 💪, and play board games.</p>
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
          <p className="detail-wrapper__text"></p>
          </article>
      </section>
    </main>
  );
};
