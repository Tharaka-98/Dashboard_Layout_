import React from "react";

import Navbar from "./test/Test5";
import Footer from "./test/Test6";
import team2 from "./assets/img/team-2-800x800.jpg"

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-50"
            ></span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="..."
                        src={team2}
                        className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="px-3 py-6 mt-32 sm:mt-0">
                      <button
                        className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none sm:mr-2"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                    Jenna Stones
                  </h3>
                  <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                    <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-briefcase"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-university"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="py-10 mt-10 text-center border-t border-gray-300">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
