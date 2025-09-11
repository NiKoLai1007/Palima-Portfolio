import { Link } from "react-router-dom";



const Navbar = () => (
  <nav className="fixed top-0 inset-x-0 bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg z-50">
   
    <a 
      href="#home" 
      className="font-bold text-lg hover:text-yellow-400 transition-colors duration-200"
    >
      MyPortfolio
    </a>

   
    <ul className="flex gap-6">
      <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
      <li><a href="#about" className="hover:text-yellow-400">About</a></li>
      <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
      <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
    </ul>

   
  </nav>
);


export default Navbar;



