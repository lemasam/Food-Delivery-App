import { NavLink } from "react-router-dom"
import "./Navbar.css";



function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={"/"} >
        Home:
      </NavLink>
      <NavLink to={"/about"} >
        About:
      </NavLink>
      <NavLink to={"/contactus"}>
        Contact Us:
      </NavLink>
    </nav>
  );
}

export default Navbar
