import React, { useState } from 'react';

const BlogCard = (props) => {
    const { title, img, details, postTime, link } = props.blog;
    return (
        <div data-aos="zoom-in-up" className="">
            <div className=" blogs md:grid md:grid-cols-3 shadow-xl rounded-sm hover:shadow-2xl p-6 bg-gray-100">
                <div className="">
                    <img src={img} className="w-full md:w-96 rounded-sm" />
                </div>
                <div className="p-4 md:p-0 md:px-8 col-span-2 m-0 text-left">
                    <h1 className="text-2xl font-bold text-green-800 py-2">{title}</h1>
                    <p className="text-sm text-black">{details.slice(0, 200)}
                    </p>
                    <p className="font-light text-gray-500 my-2"><small><i className="far fa-clock"></i> {postTime}</small></p>
                    <a target="_blank" rel="noreferrer" href={link}
                        className="py-2 px-3 mt-4 text-white bg-purple-400 inline-block rounded  hover:shadow-lg hover:bg-purple-700">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;