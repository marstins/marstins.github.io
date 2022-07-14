import Capsule from "./Capsule"

export default function ProjectCard({title, technologies, description, url}) {

  return (
    <div className="project-container">
      <div className="project-container__image-container">
        <img className="image project-container__image-container__image" src={require(`../images/${title}.png`)} alt={title} />
      </div>
      <div className="project-container__text-container">
        <h2 className="project-container__text-container__title">{title}</h2>
        <div className="project-container__text-container__technologies-container">
          {technologies.map(technology => <Capsule key={technologies.indexOf(technology)} content={technology} />)}
        </div>
        <p className="project-container__text-container__text">{description}</p>
        <div className="project-container__text-container__button-container">
          <a className="button button--small" href={url}>Visit</a>
        </div>
      </div>     
    </div>
  )
}
