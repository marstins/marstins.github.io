import pic from "../images/profile.jpg";

export default function AboutSection() {
  return (
    <section className="section section--flex-row">
      <div className="section__container">
        <div className="section__image-container">
          <img className="image image--shadow" src={pic} alt="matheus"/>
        </div>
      </div>
      <div className="section__container section__container--new-order section__container--flex-column">
        <h1 className="section__title">About Me</h1>
        <p>
          Front-end developer based in Rio de Janeiro, Brazil. My passion for Programming began when I started messing around with Web Development as a teenager, then, later, I studied some Game Development, and it always felt like I should pursue Programming as a career. Although I graduated in Business, when the pandemic struck, I saw the opportunity to finally pursue a passion of mine, and steer my career towards Front-end Development.
        </p>
      </div>  
    </section>
  )
}