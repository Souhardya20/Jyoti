


import logo from "./assests/Logo.png"
import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

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
  return (
   
    <Navbar fluid  className='  py-3 sticky top-0 z-10 ' style={{backgroundColor:"rgb(34 33 63)"}}>
      <Navbar.Brand >
      <div className="flex  items-center">
          <img src={logo} className="h-10 mr-3" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            JYOTI{" "}
            <span className=" text-xs italic text-yellow-100">
              Free Night Education
            </span>
          </span>
          </div>
      </Navbar.Brand>
      <Navbar.Toggle className=" bg-transparent text-white focus:bg-transparent focus:border-0"  />
      <Navbar.Collapse className="border-[2px] lg:border-0 md:border-0 px-4 lg:px-14 mt-4  border-white">
        <li>
          <NavLink
            to="/"
            className="block py-2 pl-3 text-xl  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
            className="block py-2 pl-3 text-xl  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
            className="block py-2 pl-3 text-xl  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
            className="block py-2 pl-3 text-xl  text-white pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            style={({ isActive }) =>
              isActive ? { color: "rgb(2 240 254) " } : {}
            }
          >
            Contact
          </NavLink>
        </li>
      </Navbar.Collapse>
    </Navbar>
   
  );
}
export default NavBar
