import React from 'react';

const IntroBanner = () => {
    return (
        <div>
            <section className="space-y-10 md:pt-24 text-left md:space-y-0 md:mx-32 my-16 grid md:grid-cols-2 grid-cols-1 ">
                <div data-aos="fade-right" className="flex items-center justify-center  md:border-r-2">
                    <div id="introduction" className="md:mr-16 p-4">
                        <h1 className="text-3xl mb-8 font-semibold text-gray-600">Kamil Hassan</h1>
                        <p className="tracking-wide text-gray-600">I was born in Bangladesh in 2002. Now I am completing my
                            undergraduate
                            study at Asia Pacific
                            University of Technology & Innovation, Malaysia majoring in Computer Science
                            (Intelligent System). The first time I
                            explored the world of programming in 2016 with C programming.</p>
                    </div>
                </div>
                <div data-aos="fade-left" id="skills" className="grid grid-cols-3 gap-4 md:gap-8 md:ml-16 p-4 md:p-0">
                    <div
                        className="w-28 h-28 text-xs bg-gray-600 border-8 border-indigo-500 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Team Work
                    </div>
                    <div
                        className="animate-pulse w-28 h-28 text-xs bg-gray-600 border-8 border-pink-600 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Writing
                    </div>
                    <div
                        className=" w-28 h-28 text-xs p-2 text-center bg-gray-600 border-8 border-purple-500 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Problem Solving
                    </div>
                    <div
                        className="animate-pulse w-28 h-28 text-xs bg-gray-600 border-8 border-green-500 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Leadership
                    </div>
                    <div
                        className=" w-28 h-28 text-xs bg-gray-600 border-8 border-yellow-500 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Hard Working
                    </div>
                    <div
                        className="animate-pulse w-28 h-28 text-xs bg-gray-600 border-8 border-red-400 text-white rounded-full flex justify-center items-center font-light tracking-wide">
                        Fast Learner
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroBanner;