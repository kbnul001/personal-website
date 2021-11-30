import React from 'react';
import Typing from 'react-typing-animation';
import kamil from '../../media/pictures/kamil-intro.jpeg';
import '../TopBanner/TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner flex">
            <section className="my-auto relative w-32 md:w-48 mx-auto">
                <div className=""><img className="rounded-full border-8 border-blue-400" src={kamil}
                    alt="" />
                </div>

                <Typing>
                    <p className="text-white  text-center mt-4 text-xl text-space tracking-wide">Hi! I'm Kamil</p>
                </Typing>
            </section>
        </div>
    );
};

export default TopBanner;