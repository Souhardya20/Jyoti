import logo from "./assests/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const nav = () => {
    if (document.querySelector(".hidden").style.display === "none")
      document.querySelector(".hidden").style.display = "block";
    else document.querySelector(".hidden").style.display = "none";
  };
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
    <div className="mb-14">
      <nav
        className="dark:bg-gray-90  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        style={{ backgroundColor: "rgb(34 33 63)" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={logo} className="h-10 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              JYOTI{" "}
              <span className=" text-xs italic text-yellow-100">
                Free Night Education
              </span>
            </span>
          </div>

          <div className="flex">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={nav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col  text-lg p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={clickAndScroll}
                  style={({ isActive }) =>
                    isActive ? { color: "#00B8FF " } : { color: "white" }
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className="block py-2 pl-3 pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={clickAndScroll}
                  style={({ isActive }) =>
                    isActive ? { color: "#00B8FF " } : { color: "white" }
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className="block py-2 pl-3 pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={clickAndScroll}
                  style={({ isActive }) =>
                    isActive ? { color: "#00B8FF " } : { color: "white" }
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={clickAndScroll}
                  to="/contact"
                  className="block py-2 pl-3 pr-4 hover:scale-105 transition-transform rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) =>
                    isActive ? { color: "#00B8FF " } : { color: "white" }
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
