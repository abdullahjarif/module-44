import React, { useState } from "react";
import Link from "./Link";
import { X, Menu } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/service",
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={() => setMenuOpen(!menuOpen)}>

        {menuOpen ? (
          <X className=" md:hidden"></X>
        ) : (
          <Menu className=" md:hidden"></Menu>
        )}

        <ul className="md:hidden">
            {links}
        </ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>

      <ul className=" md:flex hidden">
        {
            links
        }
      </ul>

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
