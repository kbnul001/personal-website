import React from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import FeaturedBlogs from '../FeaturesBlogs/FeaturedBlogs';
import IntroBanner from '../IntroBanner/IntroBanner';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <IntroBanner></IntroBanner>
            <FeaturedProjects />
            <FeaturedBlogs></FeaturedBlogs>
        </div>
    );
};

export default Home;