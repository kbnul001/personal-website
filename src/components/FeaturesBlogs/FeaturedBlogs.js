import React, { useEffect } from 'react';
import habit7 from '../../media/Blogs/7habit.jpeg';
import aggrement from '../../media/Blogs/4aggrement.jpeg';
import Aos from 'aos';

const FeaturedBlogs = () => {
    useEffect(() => {
        Aos.init({
            // duration: 2000
        });
    }, []);
    return (
        <div>
            <section>
                <h1 className="text-gray-600 text-3xl text-center pt-16 font-bold tracking-wider">Featured Blogs</h1>

                <div className="space-y-20  py-20 px-8 md:px-48">
                    {/* <!-- first blog --> */}
                    <div data-aos="zoom-in-up" className="">
                        <div className=" blogs md:grid md:grid-cols-3 shadow-lg hover:shadow-2xl">
                            <div className="">
                                <img src={habit7} className="w-full md:w-96 " />
                            </div>
                            <div className="p-4 md:p-0 md:px-8 col-span-2 m-0">
                                <h1 className="text-2xl font-bold text-green-800 py-2">Being Effective With '7 Habits of
                                    Highly
                                    Effective People' by Stephen Covey </h1>
                                <p className="bg-white text-sm text-black">What are the habits that make a person highly
                                    effective? Before 1920, people used to attribute their success to things like
                                    integ...
                                </p>
                                <a href="df"
                                    className="py-2 px-3 mt-4 text-white bg-green-500 inline-block rounded hover:text-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 2nd blog --> */}
                    <div data-aos="zoom-in-up" className="">
                        <div className=" blogs md:grid md:grid-cols-3 shadow-lg hover:shadow-2xl">
                            <div className="">
                                <img src={aggrement} alt="4 aggrements book" className="w-full md:w-96" />
                            </div>
                            <div className="p-4 md:p-0  md:px-8 col-span-2 m-0">
                                <h1 className="text-2xl font-bold text-green-800 py-2">Being Free with 'The Four Agreements'.
                                </h1>
                                <p className="bg-white text-sm text-black">The outside world, since time immemorial, has a
                                    significant impact on how we live our lives. After we are born, society teaches us how
                                    to li...
                                </p>
                                <a href=""
                                    className="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded hover:text-black">Read
                                    More</a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default FeaturedBlogs;