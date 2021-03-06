import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);



    return (
        <div className=" md:w-full top-0 absolute text-white w-full">
            <nav className={props.props == 'yes' ? "relative flex flex-wrap items-center justify-between bg-gray-800 px-2 py-3" : " relative flex flex-wrap items-center justify-between bg-transparent px-2 py-3 "}>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        {/* <NavLink
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/home"
                        >
                            <span className="">Kamil Hassan</span>
                        </NavLink> */}
                        <button
                            className=" text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex mt-4 flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-2">Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/about/journey"
                                >
                                    <span className="ml-2">My Life</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/projects"
                                >
                                    <span className="ml-2">Projects</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/blogs"
                                >
                                    <span className="ml-2">Blogs</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/contact"
                                >
                                    <span className="ml-2">Contact Me</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a
                                    target="_blank" rel="noreferrer"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="https://drive.google.com/file/d/1GO1dRgU9-QHvC382SULnK1GAQ9cUblJ7/view"
                                >
                                    <span className="ml-2">My Resume</span>
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;