import Background from "../component/Background";
import React, { Component } from "react";

export default class skills extends Component{
    render() {
        const style = { 
            color: 'red'
        }
        return(
            <div>
                <h1>Technical Skills</h1>
                <h2>Frontend</h2>
                <h2>Backend</h2>
                <h2>Database</h2>
                <h2>Cloud Platforms</h2>
                <h2>Other Tools</h2>
            </div>
            
        )
    }
    
}

