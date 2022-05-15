import projects from '../data';
import ProjectCard from './ProjectCard';

export default function ProjectSection() {

  return (
    <section className="section section--flex-row">
      <div className="section__container">
        <h1 className="section__title">Projects</h1>
      </div>
      <div className="section__container section__container--overflow">
        {projects.map(project => 
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            technologies={project.technologies} 
            description={project.description} 
            url={project.url} 
          />   
        )}
      </div>
    </section>
  )
}