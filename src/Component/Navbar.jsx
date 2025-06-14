import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { logOut, user, serverUserData } = use(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleAuth = () => setIsLoggedIn(!isLoggedIn);

  const switchTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("LogOut Successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // console.log(serverUserData.name);

  return (
    <div>
      <nav className="nav-bg shadow-md">
        <div className="md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-c font2">
                Jointly
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 text-base font-bold "
                    : "text-base  hover:text-green-800 transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/upcoming-events"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 text-base font-bold "
                    : "text-base  hover:text-green-800 transition duration-300"
                }
              >
                Upcoming Events
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 text-base font-bold "
                    : "text-base  hover:text-green-800 transition duration-300"
                }
                to={"/create-event"}
              >
                Create Event
              </NavLink> */}
              {/* <NavLink
                to={"/ev"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 text-base font-bold "
                    : "text-base  hover:text-green-800 transition duration-300"
                }
              >
                Manage Events
              </NavLink> */}
            </div>

            <div className="md:flex items-center gap-3">
              {/* user profile here  */}
              <div className="relative mt-6 md:mt-0 group inline-block cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src={user ? serverUserData?.photo || user.photoURL || "" : ""}
                  alt=""
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link
                      to="/create-event"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Create Event
                    </Link>
                    <Link
                      to="/my-events"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Manage Events
                    </Link>
                    <Link
                      to="/join-events"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Join Events
                    </Link>
                  </div>
                )}

                {user && (
                  <span className="absolute top-1/2 -translate-y-1/2 right-full mr-2 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {serverUserData?.name || user.displayName}
                  </span>
                )}
              </div>

              <div className="hidden md:flex items-center space-x-4">
                {user ? (
                  <Link>
                    <button
                      onClick={handleLogOut}
                      className={`btn px-4 py-2 rounded-md text-sm font-medium bg-red-500`}
                    >
                      LogOut
                    </button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <button
                      onClick={handleAuth}
                      className={`btn px-4 py-2 rounded-md text-sm font-medium bg-green-700`}
                    >
                      LogIn
                    </button>
                  </Link>
                )}
                <div>
                  <label className="toggle text-base-content">
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="theme-controller"
                      checked={isDarkMode}
                      onChange={switchTheme}
                    />

                    <svg
                      aria-label="sun"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </g>
                    </svg>

                    <svg
                      aria-label="moon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                      </g>
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-c hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex justify-center">
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="theme-controller"
                  checked={isDarkMode}
                  onChange={switchTheme}
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="block px-3 py-2 text-c hover:text-gray-900">Home</a>
              <a className="block px-3 py-2 text-c hover:text-gray-900">
                About
              </a>
              <a className="block px-3 py-2 text-c hover:text-gray-900">
                Services
              </a>
              <a className="block px-3 py-2 text-c hover:text-gray-900">
                Contact
              </a>
              <button
                onClick={handleAuth}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  isLoggedIn
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
