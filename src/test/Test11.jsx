import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "./Test10";
import UserDropdown from "./Test12";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
            to="/"
          >
            Tailwind Starter Kit
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    to="/"
                  >
                    Tailwind Starter Kit
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-0 border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold text-pink-500 uppercase hover:text-pink-600"
                  to="/dashboard"
                >
                  <i className="mr-2 text-sm opacity-75 fas fa-tv"></i> Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-sm fas fa-newspaper text-blueGray-400"></i> Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-sm fas fa-user-circle text-blueGray-400"></i> Profile Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-blueGray-400"></i> Login
                </Link>
              </li>

              <li className="items-center">
                <a
                  className="block py-3 text-xs font-bold uppercase text-blueGray-300"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="mr-2 text-sm fas fa-clipboard-list text-blueGray-300"></i> Register (soon)
                </a>
              </li>

              <li className="items-center">
                <a
                  className="block py-3 text-xs font-bold uppercase text-blueGray-300"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="mr-2 text-sm fas fa-tools text-blueGray-300"></i> Settings (soon)
                </a>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fas fa-paint-brush text-blueGray-400"></i> Styles
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fab fa-css3-alt text-blueGray-400"></i> CSS Components
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fab fa-vuejs text-blueGray-400"></i> VueJS
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fab fa-react text-blueGray-400"></i> React
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fab fa-angular text-blueGray-400"></i> Angular
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="block mb-4 text-sm font-semibold no-underline text-blueGray-700 hover:text-blueGray-500"
                  to="/"
                >
                  <i className="mr-2 text-base fab fa-js-square text-blueGray-400"></i> Javascript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
