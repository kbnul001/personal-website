import React from 'react';
import kamil from '../../media/pictures/kamil-intro.jpeg';
import '../TopBanner/TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <section class=" relative w-32 md:w-48 top-16 md:top-36 mx-auto">
                <div class=""><img class="rounded-full border-8 border-blue-400" src={kamil}
                    alt="" />
                </div>
                <p id="intro-text" class="text-white text-center mt-4 text-lg text-space tracking-wide">I'm Kamil Hassan</p>
            </section>
        </div>
    );
};

export default TopBanner;