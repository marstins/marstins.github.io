
export default function ContactSection() {

  return (
    <section className="section section--flex-row">
      <div className="section__container section__container--flex-column">
        <h1 className="section__title">Contact</h1>
        <p>Feel free to leave a message!</p>
        <p>Or email me at <span className="section__span">marstins.ma@gmail.com</span>.</p>
        <div className="form-container">
          <form className="form" action="https://formsubmit.co/4eb9aebe36c081eda53cd5c0cb103d05" method="POST">
              <input className="form__input" type="text" name="name" placeholder="Name" required /> 
              <input className="form__input form__input--col-2" type="email" name="email" placeholder="Email" required />
              <textarea className="form__input form__input--large" name="message" placeholder="Message" required />
              <button className="button button--medium" type="submit">Submit</button>
          </form> 
        </div>
      </div>
      <div className="section__container section__container--hidden">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49435.41464780108!2d-43.21694463799852!3d-22.938837986990677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1649722669337!5m2!1spt-BR!2sbr" title="rio de janeiro" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}