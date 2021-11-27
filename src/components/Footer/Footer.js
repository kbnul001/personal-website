import React from 'react';

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-gray-800 text-white absolute right-0 left-0">
                <div className="container  flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-400">
                    <ul
                        className=" self-center py-6 space-y-4 font-light text-center md:space-x-8 sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li>Home</li>
                        <li>About</li>
                        <li>My Life</li>
                        <li>Blogs</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-12">
                            <a href=""><i className="fab fa-facebook-square text-2xl"></i></a>
                            <a href=""><i className="fab fa-linkedin text-2xl"></i></a>
                            <a href=""><i className="fab fa-instagram-square text-2xl"></i></a>
                            <a href=""><i className="fab fa-youtube text-2xl"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;