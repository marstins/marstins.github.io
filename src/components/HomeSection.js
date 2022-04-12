
export default function HomeSection() {

  return (
    <section className="section section--custom-bg">
      <div className="section__text-container">
        <h1 className="section__title">Hello,</h1>
        <p className="section__text--big">
          I'm <span className="section__span">Matheus Martins</span>, a front-end developer.
        </p>
        <p className="section__text--big">
          Nice to meet you!
        </p>
        <ul className="menu menu--big-spacing">
          <li>
            <a href="https://github.com/marstins" className="menu__item menu__item--small-no-border">
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
              <span className="menu__item__span">github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/martins-m/" className="menu__item menu__item--small-no-border">
              <span>
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
              <span className="menu__item__span">linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/martinspcm/" className="menu__item menu__item--small-no-border">
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span className="menu__item__span">instagram</span>
            </a>
          </li>
        </ul>
      </div> 
    </section>
  )
}