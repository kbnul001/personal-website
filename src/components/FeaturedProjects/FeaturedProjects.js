import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./PROJECT_DATA.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h1 className="text-gray-600 text-3xl text-center pt-16 font-bold tracking-wider my-16">Featured Projects</h1>
            <section className="grid grid-cols-1 md:grid-cols-2  md:mx-36 gap-16">
                {
                    projects.map(p => <Project
                        key={p.title}
                        project={p}
                    ></Project>)
                }
            </section>
        </div>
    );
};

export default FeaturedProjects;