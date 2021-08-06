import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <Link className="options" to="/">Home</Link>
                <Link className="options" to="/about">About me</Link>
                <Link className="options" to="/experience">Experience</Link>
                <Link className="options" to="/projects">Projects</Link>
                <Link className="options" to="/skills">Skills</Link>
                <Link className="options" to="/resume">Resume</Link>
            </nav>
        );
    }
}