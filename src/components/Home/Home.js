import React from 'react';
import FeaturedBlogs from '../FeaturesBlogs/FeaturedBlogs';
import IntroBanner from '../IntroBanner/IntroBanner';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <IntroBanner></IntroBanner>
            <FeaturedBlogs></FeaturedBlogs>
        </div>
    );
};

export default Home;