import React from "react";
// import HardwareImg from "../assets/hardware.jpg";
// import FigmaImg from "../assets/figma.jpg";
// import EditingImg from "../assets/editing.jpg";
// import DataMappingImg from "../assets/datamapping.jpg";

const About = () => {
  return (
    <section className="w-full overflow-x-hidden bg-gray-50 py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>

        <p className="max-w-3xl text-gray-600 leading-relaxed mb-12 text-lg">
          Hi, I’m <span className="font-semibold text-gray-800">Shan</span> —
          <br />
          <br />
          I enjoy transforming ideas into functional and visually appealing web
          experiences that focus on both design and performance.
          <br />
          <br />
          Aside from web development, I have experience in{" "}
          <span className="font-semibold">hardware projects</span>,{" "}
          <span className="font-semibold">UI design with Figma</span>,{" "}
          <span className="font-semibold">editing</span>, and{" "}
          <span className="font-semibold">data mapping</span>. These skills
          allow me to merge creativity with technical precision — from designing
          interfaces to implementing logical functionality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-2 md:px-0">
          <img
            alt="Hardware Project"
            className="w-full h-52 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-200"
          />
          <img
            alt="Figma Design"
            className="w-full h-52 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-200"
          />
          <img
            alt="Editing"
            className="w-full h-52 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-200"
          />
          <img
            alt="Data Mapping"
            className="w-full h-52 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
