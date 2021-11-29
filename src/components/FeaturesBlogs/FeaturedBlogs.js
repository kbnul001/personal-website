import React, { useEffect } from 'react';
import habit7 from '../../media/Blogs/7habit.jpeg';
import aggrement from '../../media/Blogs/4aggrement.jpeg';
import Aos from 'aos';
import BlogCard from '../BlogCard/BlogCard';

const blogs = [
    { title: "Being Effective With '7 Habits of Highly Effective People' by Stephen Covey", details: "What are the habits that make a person highly effective? Before 1920, people used to attribute their success to things like integ...", img: "https://1.bp.blogspot.com/-hPqpExqn9xY/YC9f2YMHYHI/AAAAAAAAAM0/5OzZzWuS9SUmPIWaFrkW7zQWeqPu4dQOACLcBGAsYHQ/w400-h275/IMG_20210219_124811.jpg", postTime: "February 18, 2021", link: "https://booktimewithkamil.blogspot.com/2021/02/being-effective-with-7-habits-of-highly.html" },
    { title: "Being Free with 'The Four Agreements'", details: "The outside world, since time immemorial, has asignificant impact on how we live our lives. After we are born, society teaches us howto li...", img: "https://1.bp.blogspot.com/-EUE_qOQT9j8/YAUy4zv02pI/AAAAAAAAAJk/LqLDjr02g_IoWKXP3id5A5GutlGnOweswCLcBGAsYHQ/w400-h226/IMG_7762.jpg", postTime: "Januarry 11, 2021", link: "https://booktimewithkamil.blogspot.com/2021/01/being-free-with-four-agreements.html" },
    { title: "How our brain turn on Autopilot mode!", details: "Our brain is a fantastic creation. But today, I will talk about a specific task of the brain that really amazed me. Whenever we learn something new or take new information, our brain's anterior part – the prefrontal cortex is on duty. In this time, neurons transmit the information as signals. As we follow the same routine couple of times, the sequence gets stored in a deeper part of the brain, and the process is called chunking: a series of actions converting into a Habit.", img: "https://1.bp.blogspot.com/-Ct7joAuo4mI/YDdkaovhZOI/AAAAAAAAANI/HLwUJiacBX8JPzwJ6hVgQi3cCV0mqr8ZwCLcBGAsYHQ/w640-h480/Brain%2BActivity.png", postTime: "February 25, 2021", link: "https://booktimewithkamil.blogspot.com/2021/02/how-our-brain-turn-on-autopilot-mode.html" },
]

const FeaturedBlogs = () => {
    useEffect(() => {
        Aos.init({
            // duration: 2000
        });
    }, []);
    return (
        <div>
            <h1 className="text-gray-600 text-3xl text-center pt-16 font-bold tracking-wider">Featured Blogs</h1>
            <section className="grid grid-cols-1 gap-16 mx-6 md:mx-36 my-10">
                {
                    blogs.map(blog => <BlogCard
                        key={blog.title}
                        blog={blog}
                    ></BlogCard>)
                }
            </section>
        </div>
    );
};

export default FeaturedBlogs;