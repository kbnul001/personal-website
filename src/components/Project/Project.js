import React from 'react';

const Project = (props) => {
    const { name, overview1, overview2, overview3, time, clientLink, serverLink, liveLink, img, technology } = props.project;
    return (

        <div data-aos="zoom-out" className="max-w-md rounded overflow-hidden shadow-lg mx-auto">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl font-serif mb-2">{name}</h1>
                    <h4> <i class="far fa-clock"></i> {time} days</h4>
                </div>
                <p className="text-gray-700 my-4 text-left text-sm space-y-2">
                    <li>{overview1}</li>
                    <li>{overview2}</li>
                    <li>{overview3}</li>

                </p>
                <p className="text-left"> <strong> Technology Used: </strong> {technology}</p>
            </div>
            <div className="px-2 pt-4 pb-2">
                <button className=""><a target="_blank" rel="noreferrer" href={liveLink} className="inline-block hover:shadow-lg hover:bg-red-400 hover:text-white bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Live Website</a></button>
                <button><a target="_blank" rel="noreferrer" href={clientLink} className="inline-block hover:shadow-lg hover:bg-purple-400 hover:text-white bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github Client</a></button>
                {
                    serverLink && <button><a target="_blank" rel="noreferrer" href={serverLink} className="inline-block hover:shadow-lg hover:bg-purple-500 hover:text-white bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github Server</a></button>
                }

            </div>
        </div>


    );
};

export default Project;