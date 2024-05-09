import { NavLink } from "react-router-dom"



function Navbar() {
  return (
    <nav className=" rounded-full text-2xl font-bold md:mt-6 md:mx-48 bg-slate-500 ">
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
