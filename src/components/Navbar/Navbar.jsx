import { NavLink } from "react-router-dom"



function Navbar() {
  return (
    <nav className="text-2xl font-bold bg-green-600  ">
      <NavLink to={"/"} className="p-48 w-full">
        Home:
      </NavLink>
      <NavLink to={"/about"} className="p-48 w-full">
        About:
      </NavLink>
      <NavLink to={"/contactus"} className=" p-48 w-full">
        Contact Us:
      </NavLink>
    </nav>
  );
}

export default Navbar
