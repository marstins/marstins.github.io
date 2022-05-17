import { useState } from 'react';
import NavItem from './components/NavItem';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [currentSection, setCurrentSection] = useState('Home');

  function change(section) {
    setCurrentSection(section);
  }

  function returnPage() {
    if (currentSection === 'Home') {
      return <HomeSection />
    } else if (currentSection === 'About Me') {
      return <AboutSection />
    } else if (currentSection === 'Projects') {
      return <ProjectSection />
    } else if (currentSection === 'Contact') {
      return <ContactSection />
    }
  }

  return (
    <div className="App">
      <nav className="nav">
        <ul className="menu menu--flex-column">
          <NavItem 
            handleClick={change} 
            reference='Home' 
            currentPage={currentSection} 
            icon={<i className='fa-solid fa-house'></i>} 
          />
          <NavItem 
            handleClick={change} 
            reference='About Me' 
            currentPage={currentSection} 
            icon={<i className="fa-solid fa-user-astronaut"></i>} 
          />
          <NavItem 
            handleClick={change} 
            reference='Projects' 
            currentPage={currentSection} 
            icon={<i className='fa-solid fa-code'></i>} 
          />
          <NavItem 
            handleClick={change} 
            reference='Contact' 
            currentPage={currentSection} 
            icon={<i className="fa-solid fa-envelope"></i>} 
          />
        </ul>
      </nav>
      {returnPage()}
    </div>
  );
}

