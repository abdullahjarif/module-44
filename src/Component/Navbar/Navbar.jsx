import React from "react";
import Link from "./Link";

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
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
