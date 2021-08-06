import Navigation from '../component/Navigation'
import Background from '../component/Background'
import {Link} from "react-router-dom";
import React, { Component } from 'react';

export default function experience (){
    return(
        <div>
            <Navigation></Navigation>
            <h1>Work Experience</h1>
            <nav>
                <a>Sumitovant Biopharma</a>
                <a>InstaHub</a>
            </nav>
            <div className="experience" id="sumito">
                <h2>Web Design Intern</h2>
                <p>
                • Developed a web application in Flask for stakeholders to perform different complex analysis on pharmaceutical
                data stored in AWS Redshift database
                </p>
                <p>
                • Worked with Data Engineers and Data Scientists to add new demanding features to the web application with API
                Endpoints
                </p>
                <p>
                • Redesigned the front end of the web application with jQuery and Jinja to make it more user friendly
                </p>
            </div>
            <div className="experience" id="insta">
                <h2>Software Engineer Intern, Team Lead</h2>
                <p>
                • Built IoT dashboard in React allowing users to manage their devices and observe room activities through real time
                charts and heatmap
                </p>
                <p>
                • Implemented Agile software development cycle in the project management process and improve the efficiency of
                the team.
                </p>
                • Designed and developed backend server in Node.js to operate in MySQL datebase to serve real-time data via
                RESTful APIs
                <p>
                • Streamline the processes of Continue Integration of the web application and project management
                </p>
            </div>
            
        </div>
        
    );
}