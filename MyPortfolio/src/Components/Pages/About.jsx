import React from "react";
import WGLEveG from "../../assets/WGLEveG.jpeg"; // Make sure to place your image in this path or update accordingly.

const About = () => (
    <div style={{ textAlign: "center", padding: "2rem" }}>
        <img
            src={WGLEveG}
            alt="WGLEveG"
            style={{ width: "180px", borderRadius: "50%", marginBottom: "1rem" }}
        />
       
    </div>
);

export default About;