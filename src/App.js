import './App.css';
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
import home from "./pages/home";
import about from "./pages/about";
import skills from "./pages/skills";
import projects from "./pages/projects";
import funFacts from "./pages/funFacts";
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home}></Route>
        <Route path="/about" exact component={about}></Route>
        <Route path="/skills" exact component={skills}></Route>
        <Route path="/projects" exact component={projects}></Route>
        <Route path="/funFacts" exact component={funFacts}></Route>
      </Switch>
    </Router>
  );
}

export default App;






