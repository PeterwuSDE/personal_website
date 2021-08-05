import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function home() {
    return (
      <div className="App">
        <div className="Hero">
          <div className="background1">
          </div>
          <nav className="Navbar">
            <Link className="options" to="/about">About me</Link>
            <Link className="options" to="/skills">Skills</Link>
            <Link className="options" to="/projects">Projects</Link>
            <Link className="options" to="/funFacts">Fun Facts</Link>
          </nav>
          <div className="intro">
            <h2 className="i1">Hi I'm</h2>
            <h1 className='i2'>Peter Wu</h1>
            <h3 className='i3'>Software Engineer/Web Developer</h3>
            <a className="github" href="https://github.com/PeterwuSDE"><FontAwesomeIcon icon= {['fab', 'github']} size="3x"/></a>
            <a className="linkedin" href="https://www.linkedin.com/in/haodong-wu/"><FontAwesomeIcon icon= {['fab', 'linkedin']} size="3x"/></a>
          </div>
        </div>
        <div className="profile">
          <h2>
            Who am I?
          </h2>
          <p>
            Peter Wu is a self motivated future software engineer with a "never quit" attitude. He is currently pursuing Master of Science in Software Engineering degree at DePaul University, while self-learning a few web development frameworks such as React and Node. He is seeking a software engineer internship for summer 2021.
          </p>
        </div>
      </div>
    );
}