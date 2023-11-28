import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assests/Logo.png"
import {
  Navbar,
  MobileNav,
  
  IconButton,
 
} from "@material-tailwind/react";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const clickAndScroll = () => {
    scrollToTop();
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col px-4 gap-2 py-2 lg:mb-0 lg:mt-0 border lg:border-0 border-gray-100 rounded-lg lg:flex-row lg:items-center lg:gap-6" style={{ backgroundColor: "rgb(34 33 63)" }}>
      <li>
        <NavLink
          to="/"
          className="block py-2 pl-3  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          onClick={clickAndScroll}
          style={({ isActive }) =>
            isActive ? { color: "rgb(2 240 254) " } : {}
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/gallery"
          className="block py-2 pl-3  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          onClick={clickAndScroll}
          style={({ isActive }) =>
            isActive ? { color: "rgb(2 240 254) " } : {}
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/team"
          className="block py-2 pl-3  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          onClick={clickAndScroll}
          style={({ isActive }) =>
            isActive ? { color: "rgb(2 240 254) " } : {}
          }
        >
          Team
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={clickAndScroll}
          to="/contact"
          className="block py-2 pl-3  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          style={({ isActive }) =>
            isActive ? { color: "rgb(2 240 254) " } : {}
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );

  return (


    <Navbar className="top-0 sticky z-10 h-max max-w-full rounded-none border px-4 py-2 lg:px-8 lg:py-4"
      style={{ backgroundColor: "rgb(34 33 63)" }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">

        <div className="flex items-center">
          <img src={logo} className="h-10 mr-3" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            JYOTI{" "}
            <span className=" text-xs italic text-yellow-100">
              Free Night Education
            </span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}

      </MobileNav>
    </Navbar>


  );
}
export default NavBar