import React from 'react';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import FeaturedBlogs from '../FeaturesBlogs/FeaturedBlogs';
import Header from '../Header/Header';
import IntroBanner from '../IntroBanner/IntroBanner';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <IntroBanner></IntroBanner>
            <FeaturedProjects />
            <FeaturedBlogs></FeaturedBlogs>
        </div>
    );
};

export default Home;