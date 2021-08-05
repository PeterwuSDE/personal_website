import React from 'react';

export default function Background (){   
    const b1Style = {
        position: "absolute",
        width: "1920px",
        height: "800px",
        left: "-2px",
        top: "0px",
        background: "#D7D7D7",
        overflow: "hidden"
    }
    const b2Style = {
        position: "absolute",
        width: 1500,
        height: 1200,
        left: 1000,
        top: -192,
        background: "#000000",
        transform: "rotate(9.67deg)"
    }

    return (   
        <div className="b1" style = { b1Style }>
            
        </div>
       
    );
    
}

    