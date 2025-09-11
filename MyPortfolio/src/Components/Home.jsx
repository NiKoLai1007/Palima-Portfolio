import React from "react";
import FrontPage from "./Pages/Frontpage";


import Navbar from "./Pages/Navbar";



export const Home = () => {
 
  return (
    <>
      <Navbar />  
     <section
        id="home"
        className="w-screen h-screen flex items-center justify-center"
      >
        <FrontPage />
      </section>

      <section
        id="about"
        className="w-screen h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
       
      </section>

      <section
        id="projects"
        className="w-screen h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">My Projects</h2>
      </section>

      <section
        id="contact"
        className="w-screen h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">Contact Me</h2>
      </section>
    </>
  );
}