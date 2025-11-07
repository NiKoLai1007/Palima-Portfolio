import About from "./Pages/About";
import FrontPage from "./Pages/Frontpage";
import Navbar from "./Pages/Navbar";
import CompileProjects from "./Projects/CompileProjects";

export const Home = () => {
  return (
    <>
      <Navbar />
      {/* Wrap everything in a scrollable container */}
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen scroll-smooth">
        <section
          id="home"
          className="snap-start w-screen h-screen flex items-center justify-center"
        >
          <FrontPage />
        </section>

        <section
          id="about"
          className="snap-start w-screen h-screen flex items-center justify-center"
        >
          <About />
        </section>

        <section
          id="projects"
          className="snap-start w-screen h-screen flex items-center justify-center"
        >
          <CompileProjects />
        </section>

        <section
          id="contact"
          className="snap-start w-screen h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-semibold">Contact Me</h2>
        </section>
      </main>
    </>
  );
};
